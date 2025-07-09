import { configureStore } from "@reduxjs/toolkit";
import daySliceReducer from "./daySlice";

export const store = configureStore({
  reducer: {
    track: daySliceReducer,
  },
});
