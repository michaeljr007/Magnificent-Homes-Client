import { configureStore } from "@reduxjs/toolkit";
import PropertySlice from "./slices/PropertySlice";
import ProfileSlice from "./slices/ProfileSlice";
import CurrentPropertySlice from "./slices/CurrentPropertySlice";

export const Store = configureStore({
  reducer: {
    Properties: PropertySlice,
    Profile: ProfileSlice,
    CurrentProperty: CurrentPropertySlice,
  },
});
