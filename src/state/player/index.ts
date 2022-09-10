import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { 
    verifySoundCloud,
    verifySpotify,
    verifyYouTube
} from "../../utils/verifyLinks";
import { ProgressProps } from '../../Services/Player';

export interface Track {
    uri: string;
    name: string;
    cover: string;
    progress: ProgressProps;
    duration: number;
    seek: number | undefined;
}
export interface PlayerState {
  playing: boolean;
  track: Track;
  queue: Track[];
  isSpotify: boolean;
  isSoundcloud: boolean;
  isYouTube: boolean;
  volume: number;
}

const initialState: PlayerState = {
  playing: false,
  isSpotify: false,
  isSoundcloud: true,
  isYouTube: true,
  track: {
    cover: 'https://i.pinimg.com/originals/0e/fb/13/0efb13304e6c69a383736aaad990cd5d.png',
    name: 'Modern Romantics',
    uri: 'https://soundcloud.com/kidgorgeousbeats/sets/frank-ocean-look-at-us-were-in-love',
    progress: { loaded: 0, loadedSeconds: 0, played: 0, playedSeconds: 0  },
    duration: 0,
    seek: undefined
  },
  queue: [],
  volume: 25,
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPlaying: (state, action: PayloadAction<boolean>) => {
      state.playing = action.payload
    },
    setTrack: (state, action: PayloadAction<Track>) => {
        state.track = action.payload;
        state.isSpotify = verifySpotify(action.payload.uri);
        state.isYouTube = verifyYouTube(action.payload.uri);
        state.isSoundcloud = verifySoundCloud(action.payload.uri);
    },
    setVolume: (state, action: PayloadAction<number>) => {
        state.volume = action.payload;
    },
    setProgress: (state, action: PayloadAction<ProgressProps>) => {
        state.track.progress = action.payload;
    },
    setDuration: (state, action: PayloadAction<number>) => {
        state.track.duration = action.payload;
    },
    setSeek: (state, action: PayloadAction<number | undefined>) => {
        state.track.seek = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setProgress, setPlaying, setVolume, setTrack, setDuration, setSeek } = playerSlice.actions;

export default playerSlice.reducer