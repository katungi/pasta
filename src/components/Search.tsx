import { Command, CommandInput } from "cmdk"

export function Search() {
    return (
        <div className="flex items-center border-b px-3">
            <CommandInput placeholder="Type a command or search..." />
        </div>
    )
}