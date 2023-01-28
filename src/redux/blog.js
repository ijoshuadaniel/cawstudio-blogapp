import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllBlogPost = createAsyncThunk("getAllBlogPost", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
});

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    isLoading: false,
    data: [],
    error: false,
    filteredData: [],
    selectedPost: {},
  },
  reducers: {
    filterOut: (state, action) => {
      state.filteredData = state.data.filter((f) =>
        f.title.includes(action.payload)
      );
    },
    getSinglePost: (state, action) => {
      console.log(action.payload);
      const post = state.data.filter((f) => f.id.toString() === action.payload);
      console.log(post);
      state.selectedPost = post[0];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllBlogPost.pending, (state, action) => {
      state.isLoading = true;
      state.data = [];
    });
    builder.addCase(getAllBlogPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.filteredData = action.payload;
    });
    builder.addCase(getAllBlogPost.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.data = [];
    });
  },
});

export const { filterOut, getSinglePost } = blogSlice.actions;

export default blogSlice.reducer;
