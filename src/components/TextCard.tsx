import { formatDistanceToNow } from "date-fns"
import React from "react"

import { ClipboardIcon, TrashIcon } from "@/components/Icons"
import { useClipStore } from "@/store/clips.store"

import { Button } from "./ui/button"

export const ClipboardItem = ({ clip }: any) => {
  const { removeClip } = useClipStore()

  return (
    <div className="flex items-center gap-2 p-2 rounded-md bg-gray-100 dark:bg-gray-800">
      <ClipboardIcon className="h-6 w-6 rounded-md text-muted" />
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
        }}
      >
        <TrashIcon className="w-4 h-4" />
        <span className="sr-only">Delete</span>
      </Button>
    </div>
  )
}
