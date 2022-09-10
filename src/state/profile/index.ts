import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Profile {
    isNew: boolean;
    spotifyConnected: boolean;
    disableSpotify: boolean;
}

const initialState: Profile = {
    isNew: true,
    spotifyConnected: false,
    disableSpotify: true
  }

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setSpotifyConnected: (state, action: PayloadAction<boolean>) => {
      state.spotifyConnected = action.payload;
    },
    setIsNew: (state) => {
        state.isNew = false;
    } 
  },
})

// Action creators are generated for each case reducer function
export const { setSpotifyConnected, setIsNew } = profileSlice.actions;

export default profileSlice.reducer