"use client"
import type { NextPage } from "next"
import _ from "lodash"
import Image from "next/image"
import { useEffect } from "react"
import Empty from "@/components/Empty"
import { SearchIcon } from "@/components/Icons"
import { ClipboardItem } from "@/components/TextCard"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useClipStore } from "@/store/clips.store"
import { UnlistenFn } from "@tauri-apps/api/event"

const Home: NextPage = () => {
  const { updateClips, clips } = useClipStore()

  useEffect(() => {
    // Check if the window object is available
    if (typeof window === "undefined") return;

    const loadTauriModules = async () => {
      const { register } = await import("@tauri-apps/api/globalShortcut")
      const { appWindow } = await import("@tauri-apps/api/window")
      const app  = await import("@tauri-apps/api/app")
      const { listenToMonitorStatusUpdate, onTextUpdate, startListening } = await import("tauri-plugin-clipboard-api")
      const { exit } = await import('@tauri-apps/api/process')

      let unlistenTextUpdate: UnlistenFn
      let unlistenClipboard: () => Promise<void>
      let monitorRunning = false

      await register("CommandOrControl+Shift+V", async () => {
        await app.show()
        await appWindow.unminimize()
        await appWindow.setFocus()
      })

      const debouncedUpdateClips = _.debounce((newText) => {
        updateClips(newText)
      }, 300)

      const unlistenFunctions = async () => {
        unlistenTextUpdate = await onTextUpdate((newText) => {
          console.log("new text::")
          debouncedUpdateClips(newText)
        })
        unlistenClipboard = await startListening()
      }

      listenToMonitorStatusUpdate((running) => {
        monitorRunning = running
      })
      unlistenFunctions().catch(console.error)

      return () => {
        if (unlistenTextUpdate) {
          unlistenTextUpdate()
        }
      }
    }

    loadTauriModules()
  }, [updateClips])

  return (
    <Card className="w-full h-screen max-w-sm mx-auto grid flex-col">
      <CardHeader className="px-6">
        <div className="flex items-center gap-4">
          <Image src={"/icon.png"} alt={"pasta icon"} width={40} height={40} />
          <div className="flex flex-col">
            <h2 className="text-lg font-bold leading-none">Pasta</h2>
            <p className="text-sm text-gray-500 leading-none mt-2">
              {clips.length} Items
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-lg px-3 py-4">
          <SearchIcon className="w-4 h-4 text-muted" />
          <Input
            className="w-full text-sm"
            placeholder="Search the clipboard"
            type="search"
          />
        </div>
      </CardHeader>
      <CardContent className="p-0 flex flex-col overflow-auto">
        <div className="flex-1 flex flex-col gap-2 px-6 items-start">
          {clips.length && clips.length >= 1 ? (
            <div className="grid gap-2 text-sm w-full">
              {clips.map((item, index) => (
                <ClipboardItem key={index} clip={item} />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </CardContent>
      <CardFooter className="p-0">
        <footer className="flex justify-between p-4">
          <Button size="sm" className="w-full" variant="ghost"
            onClick={async () => {
              const { exit } = await import('@tauri-apps/api/process')
              await exit(1)
            }}
          >
            Quit Pasta 🍝
          </Button>
        </footer>
      </CardFooter>
    </Card>
  )
}

export const dynamic = "force-dynamic";
export default Home
