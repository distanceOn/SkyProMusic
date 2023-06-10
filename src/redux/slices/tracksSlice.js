import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tracks: [],
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
    setActiveItem: (state, action) => {
      return {
        ...state,
        activeItem: action.payload,
      };
    },
    getActiveItem: (state) => state.activeItem,
  },
});

export const { getTracks, setTracks, setActiveItem, getActiveItem } =
  tracksSlice.actions;
export default tracksSlice.reducer;
