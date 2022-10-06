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
  oldQueue: Track[];
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
    cover: 'https://i.scdn.co/image/ab67616d0000b2734011de7822423ed7557c3c81',
    name: 'LANY - ILSYB',
    uri: 'https://soundcloud.com/thisislany/ilysb',
    progress: { loaded: 0, loadedSeconds: 0, played: 0, playedSeconds: 0  },
    duration: 0,
    seek: undefined
  },
  queue: [
    {
      "cover": "https://i.ytimg.com/vi/OlXY0AJBtio/hqdefault.jpg",
      "duration": 0,
      "name": "Kim Larsen - Papirsklip",
      "progress": {
          "loaded": 0,
          "loadedSeconds": 0,
          "played": 0,
          "playedSeconds": 0
      },
      "seek": undefined,
      "uri": "https://m.youtube.com/watch?v=OlXY0AJBtio"
  },
  {
    "cover": "https://i.ytimg.com/vi/Wg65lmTVA_M/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBhtN5ZysigXCUyKX0sK9Ub8STkug",
      "duration": 0,
      "name": "Glimpse Of Us - Joji [Colin Hennerz Hardstyle]",
      "progress": {
          "loaded": 0,
          "loadedSeconds": 0,
          "played": 0,
          "playedSeconds": 0
      },
      "seek": undefined,
      "uri": "https://www.youtube.com/watch?v=_jb4q38HyGI"
  },
  {
    "cover": "https://i1.sndcdn.com/artworks-000066860300-35qggp-t500x500.jpg",
      "duration": 0,
      "name": "Ellie Goulding - Lights",
      "progress": {
          "loaded": 0,
          "loadedSeconds": 0,
          "played": 0,
          "playedSeconds": 0
      },
      "seek": undefined,
      "uri": "https://soundcloud.com/kiraly_gergo/ellie-goulding-lights-ground"
  }
  ],
  oldQueue: [],
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
    },
    goNext: (state) => {
      if (state.queue.length >= 1) {
        state.playing = false;
        const oldTrack: Track = state.track;
        const nextTrack: Track = state.queue[0]
        state.oldQueue = [oldTrack, ...state.oldQueue];
        state.queue = [...state.queue.filter((track) => 
          track.uri !== nextTrack.uri
        )]
        state.isSoundcloud = verifySoundCloud(nextTrack.uri)
        state.isYouTube = verifyYouTube(nextTrack.uri);
        state.isSpotify = verifySpotify(nextTrack.uri)
        state.track = nextTrack;
      }
    },
    addToQueue: (state, action: PayloadAction<Track>) => {
      state.queue = [...state.queue, action.payload];
    },
    goBack: (state) => {
      if (state.oldQueue.length >= 1) {
        state.playing = false;
        const oldTrack = state.track
        const nextTrack = state.oldQueue[0]
        state.isSoundcloud = verifySoundCloud(nextTrack.uri)
        state.isYouTube = verifyYouTube(nextTrack.uri);
        state.isSpotify = verifySpotify(nextTrack.uri)
        state.track = nextTrack;
        state.oldQueue = state.oldQueue.filter((track) => 
          track.uri !== nextTrack.uri
        )
        state.queue = [oldTrack, ...state.queue];
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
  setProgress, 
  setPlaying, 
  setVolume, 
  setTrack, 
  setDuration, 
  setSeek,
  goBack,
  goNext,
  addToQueue
 } = playerSlice.actions;

export default playerSlice.reducer