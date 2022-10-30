import { configureStore } from "@reduxjs/toolkit";
import devPtsSlicer from "./slices/playersdevpts";

export const store = configureStore({
  reducer: {
    devpts: devPtsSlicer,
  },
});
