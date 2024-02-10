import { UnlistenFn } from "@tauri-apps/api/event";
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

  let unlistenTextUpdate: UnlistenFn;
  let unlistenImageUpdate: UnlistenFn;
  let unlistenClipboard: () => Promise<void>;
  let unlistenFiles: UnlistenFn;
  let monitorRunning = false;

  useEffect(() => {
    const unlistenFunctions = async () => {
      unlistenTextUpdate = await onTextUpdate((newText) => {
        console.log(newText);
        setCopiedText(newText);

      });
      unlistenImageUpdate = await onImageUpdate((_) => {
        console.log("Image updated");
      });
      unlistenFiles = await onFilesUpdate((_) => {
        console.log("Files updated");
      });
      unlistenClipboard = await startListening();

      onClipboardUpdate(() => {
        console.log(
          "plugin:clipboard://clipboard-monitor/update event received"
        );
      });
    };

    listenToMonitorStatusUpdate((running) => {
      monitorRunning = running;
    });
    unlistenFunctions().catch(console.error);

    return () => {
      if (unlistenTextUpdate) {
        unlistenTextUpdate();
      }
      if (unlistenImageUpdate) {
        unlistenImageUpdate();
      }
      if (unlistenClipboard) {
        unlistenClipboard();
      }
      if (unlistenFiles) {
        unlistenFiles();
      }
      console.log(monitorRunning);
    };

  }, []);

  return (
    <div className="">
      <main>
        {/* {
          clips.map((clip, index) => {
            return (
              <div key={index}>
                <p className="text-white">{copiedText || 'N/A'}</p>
              </div>
            )
          }
          )} */}
        <p className="text-white">{copiedText}</p>
      </main>
    </div>
  )
}

export default Home
