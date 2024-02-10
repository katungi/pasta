import { useClipStore } from "@/store/clips.store";
import { UnlistenFn } from "@tauri-apps/api/event";
import _ from "lodash";
import type { NextPage } from "next"
import { useEffect, useState } from "react"
import {
  listenToMonitorStatusUpdate,
  onClipboardUpdate,
  onFilesUpdate,
  onImageUpdate,
  onTextUpdate,
  startListening,
} from "tauri-plugin-clipboard-api";
const Home: NextPage = () => {
  const [copiedText, setCopiedText] = useState("Copied text will be here");
  const { updateClips, clips } = useClipStore()

  let unlistenTextUpdate: UnlistenFn;
  let unlistenClipboard: () => Promise<void>;
  let monitorRunning = false;

  useEffect(() => {
    const debouncedUpdateClips = _.debounce((newText) => {
      updateClips(newText);
    }, 300);
    const unlistenFunctions = async () => {
      unlistenTextUpdate = await onTextUpdate((newText) => {
        console.log("new text::");
        debouncedUpdateClips(newText);
      });
      unlistenClipboard = await startListening();
    };

    listenToMonitorStatusUpdate((running) => {
      monitorRunning = running;
    });
    unlistenFunctions().catch(console.error);

    return () => {
      if (unlistenTextUpdate) {
        unlistenTextUpdate();
      }
    };

  }, []);

  return (
    <div className="flex h-96">
      <main className="w-full overflow-auto overflow-y-auto">
        {
          clips.reverse().map((clip, index) => {
            return (
              <div key={index} className="w-full ">
                <p className="text-white">{clip}</p>
              </div>
            )
          }
          )
        }
      </main>
    </div>
  )
}

export default Home
