import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tracks: [],
  playlistTracks: [],
  activeItem: {},
};

export const tracksSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    getTracks: (state) => state.tracks,

    setTracks: (state, action) => {
      return {
        ...state,
        tracks: action.payload,
      };
    },
    getPlaylistTracks: (state) => state.playlistTracks,
    setPlaylistTracks: (state, action) => {
      return {
        ...state,
        playlistTracks: action.payload,
      };
    },
    setActiveItem: (state, action) => {
      return {
        ...state,
        activeItem: action.payload,
      };
    },
    getActiveItem: (state) => state.activeItem,
  },
});

export const {
  getTracks,
  setTracks,
  getPlaylistTracks,
  setPlaylistTracks,
  setActiveItem,
  getActiveItem,
} = tracksSlice.actions;
export default tracksSlice.reducer;
