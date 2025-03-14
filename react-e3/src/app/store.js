import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "../features/Task/taskSlice";

export const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
  },
});
