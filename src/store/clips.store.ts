import { create } from 'zustand';

export interface ClipsStore {
    clips: string[];
    updateClips: (clip: string) => void;
}

const initialState: ClipsStore = {
    clips: [],
    updateClips: () => { }
}
export const useClipStore = create<ClipsStore>((set) => ({
    ...initialState,
    updateClips: (clip) => {
        set((state) => {
            // Only add the clip if it's not already in the array
            if (!state.clips.includes(clip)) {
                return { clips: [...state.clips, clip] };
            }
            return state;
        });
    },
}));
