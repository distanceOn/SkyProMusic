import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";
import authSlice from "./slices/authSlice";
import tracksSlice from "./slices/tracksSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authSlice,
    allTracks: tracksSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
