"use client"

import { formatDistanceToNow } from "date-fns"
import React from "react"
import toast from "react-hot-toast"
import clipboard from "tauri-plugin-clipboard-api"

import { ClipboardIcon, TrashIcon } from "@/components/Icons"
import { useClipStore } from "@/store/clips.store"

import { Button } from "./ui/button"

interface Clip {
  text: string
  time: string // Assuming ISO string or similar
}

interface ClipboardItemProps {
  clip: Clip
}

export const ClipboardItem: React.FC<ClipboardItemProps> = ({ clip }) => {
  const { removeClip } = useClipStore()
  async function AddToClipBoard() {
    await clipboard.writeText(clip.text)
    toast.success("Added to Clipboard")
  }

  return (
    <div className="flex items-center gap-2 p-2 rounded-md bg-gray-100 dark:bg-gray-800 cursor-pointer hover:bg-gray-200" >
      <Button size="sm" variant={"ghost"} onClick={async () => AddToClipBoard()}>
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
