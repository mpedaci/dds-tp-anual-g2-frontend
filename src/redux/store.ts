import { configureStore } from "@reduxjs/toolkit";
import { heladerasApi } from "./services/heladerasApi";

export const store = configureStore({
  reducer: {
    // Slices
    // Services
    [heladerasApi.reducerPath]: heladerasApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(heladerasApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
