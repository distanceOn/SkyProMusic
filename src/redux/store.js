import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";
import authSlice from "./slices/authSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
