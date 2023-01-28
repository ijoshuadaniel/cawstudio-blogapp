import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./blog";
import commentSlice from "./comments";

export const store = configureStore({
  reducer: {
    blog: blogSlice,
    comments: commentSlice,
  },
});
