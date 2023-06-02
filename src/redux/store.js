import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";
import authSlice from "./slices/authSlice";
import tracksSlice from "./slices/tracksSlice";
import oneTrackSlice from "./slices/oneTrackSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authSlice,
    allTracks: tracksSlice,
    oneTrack: oneTrackSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
