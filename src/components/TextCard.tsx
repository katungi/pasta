import { clipboard } from "@tauri-apps/api"
import { formatDistanceToNow } from "date-fns"
import React from "react"
import toast from "react-hot-toast"

import { ClipboardIcon, TrashIcon } from "@/components/Icons"
import { useClipStore } from "@/store/clips.store"

import { Button } from "./ui/button"

// @ts-ignore
export const ClipboardItem = ({ clip }) => {
  const { removeClip } = useClipStore()

  return (
    <div className="flex items-center gap-2 p-2 rounded-md bg-gray-100 dark:bg-gray-800 cursor-pointer hover:bg-gray-200">
      <Button
        size="sm"
        variant={"ghost"}
        onClick={async () => {
          await clipboard.writeText(clip.text)
          toast.success("Added to clipboard")
        }}
      >
        <ClipboardIcon className="h-6 w-6 rounded-md text-muted" />
      </Button>
      <div className="flex-1 grid gap-1">
        <div className="text-xs">
          {formatDistanceToNow(new Date(clip.time), { addSuffix: true })}
        </div>
        <div className="truncate">{clip.text}</div>
      </div>
      <Button
        size="sm"
        variant="ghost"
        onClick={() => {
          removeClip(clip.text)
          toast.success("Removed from Clipboard")
        }}
      >
        <TrashIcon className="w-4 h-4" />
        <span className="sr-only">Delete</span>
      </Button>
    </div>
  )
}
