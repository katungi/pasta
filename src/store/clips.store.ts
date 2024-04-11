import { create } from "zustand"

export interface Clip {
  text: string
  time: string
}
export interface ClipsStore {
  clips: Clip[]
  updateClips: (clip: string) => void
  removeClip: (clipText: string) => void;
}

const initialState: ClipsStore = {
  clips: [],
  updateClips: () => {},
  removeClip: () => {},
}
export const useClipStore = create<ClipsStore>((set) => ({
  ...initialState,
  updateClips: (clipText) => {
    set((state) => {
      // Check if the clip text is not already in the array to avoid duplicates
      if (!state.clips.some((clip) => clip.text === clipText)) {
        const newClip = {
          text: clipText,
          time: new Date().toISOString(), // Store the current time in ISO 8601 format
        }
        return { clips: [...state.clips, newClip] }
      }
      return state
    })
  },
  removeClip: (clipText) => {
    set((state) => ({
      // Filter out the clip that matches the clipText
      clips: state.clips.filter((clip) => clip.text !== clipText),
    }))
  },
}))
