import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./features/ui/uiSlice";
import getDataSlice from "./features/getData/getDataSlice";

export const store = configureStore({
  reducer: { ui: uiSlice, getData: getDataSlice },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
