import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllComments = createAsyncThunk("getAllBlogPost", async (id) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/comments"
  );
  return response.data.filter((f) => f.postId.toString() === id);
});

export const commentSlice = createSlice({
  name: "comments",
  initialState: {
    isLoading: false,
    error: false,
    comments: [],
  },
  reducers: {
    clearComments: (state) => {
      state.comments = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllComments.pending, (state, action) => {
      state.isLoading = true;
      state.comments = [];
    });
    builder.addCase(getAllComments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    });
    builder.addCase(getAllComments.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.comments = [];
    });
  },
});

export const { clearComments } = commentSlice.actions;

export default commentSlice.reducer;
