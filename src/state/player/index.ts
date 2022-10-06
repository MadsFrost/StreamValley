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
  isYouTube: false,
  track: {
    cover: 'https://i.pinimg.com/originals/0e/fb/13/0efb13304e6c69a383736aaad990cd5d.png',
    name: 'Modern Romantics',
    uri: 'https://soundcloud.com/thisislany/ilysb',
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
        // SPOTIFY DISABLED -- state.isSpotify = verifySpotify(action.payload);
        state.isYouTube = verifyYouTube(action.payload.uri);
        state.isSoundcloud = verifySoundCloud(action.payload.uri)
        //state.isSpotify = verifySpotify(action.payload.uri)
        state.track = action.payload;
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