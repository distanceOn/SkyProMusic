import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tracks: [],
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
  },
});

export const { getTracks, setTracks } = tracksSlice.actions;
export default tracksSlice.reducer;
