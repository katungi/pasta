import { TextCard } from "@/components/TextCard";
import { useClipStore } from "@/store/clips.store";
import { UnlistenFn } from "@tauri-apps/api/event";
import { CommandInput } from "cmdk";
import _ from "lodash";
import type { NextPage } from "next"
import { useEffect } from "react"
import {
  listenToMonitorStatusUpdate,
  onTextUpdate,
  startListening,
} from "tauri-plugin-clipboard-api";
const Home: NextPage = () => {
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
    <div className="flex h-96 arrow p-3">
      <main className="w-full overflow-auto overflow-y-auto">
        <div className="h-12">
          <h6 className="text-[#F2F2F2] p-2 px-4">Search the clipboard...</h6>
        </div>
        <div className="border px-2 border-neutral-600" />
        <div>
          {
            clips?.reverse()?.map((clip, index) => {
              return (
                <TextCard text={clip} index={index} key={index} />
              )
            }
            )
          }
        </div>
      </main>
    </div>
  )
}

export default Home
