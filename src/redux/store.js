import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";
import authSlice from "./slices/authSlice";
import tracksSlice from "./slices/tracksSlice";
import oneTrackSlice from "./slices/oneTrackSlice";
import filterSlice from "./slices/filterSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authSlice,
    allTracks: tracksSlice,
    oneTrack: oneTrackSlice,
    filter: filterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
