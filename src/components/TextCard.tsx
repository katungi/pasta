import React from "react"

import { ClipboardIcon, TrashIcon } from "@/components/Icons";

import { Button } from "./ui/button"

interface TextCardProps {
  text: string
}

export const ClipboardItem = ({ text }: TextCardProps) => {
  return (
    <div className="flex items-center gap-2 p-2 rounded-md bg-gray-100 dark:bg-gray-800">
      {/*<img*/}
      {/*  alt="Thumbnail"*/}
      {/*  className="rounded-md"*/}
      {/*  height={32}*/}
      {/*  src="/placeholder.svg"*/}
      {/*  style={{*/}
      {/*    aspectRatio: "32/32",*/}
      {/*    objectFit: "cover",*/}
      {/*  }}*/}
      {/*  width={32}*/}
      {/*/>*/}
      <ClipboardIcon className="h-6 w-6 rounded-md text-muted" />
      <div className="flex-1 grid gap-1">
        <div className="text-xs">5 minutes ago</div>
        <div className="truncate">
          {text}
        </div>
      </div>
      <Button size="sm" variant="ghost">
        <TrashIcon className="w-4 h-4" />
        <span className="sr-only">Delete</span>
      </Button>
    </div>
  )
}
