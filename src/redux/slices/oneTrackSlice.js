import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  track: {},
};

export const oneTrackSlice = createSlice({
  name: "oneTrack",
  initialState,
  reducers: {
    getOneTrack: (state) => state,

    setTracks: (state, action) => {
      return {
        ...state,
        track: action.payload,
      };
    },
  },
});

export const { getOneTrack, setOneTrack } = oneTrackSlice.actions;
export default oneTrackSlice.reducer;
