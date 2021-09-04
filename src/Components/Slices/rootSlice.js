import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [1, 2],
};

const rootSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { getPosts } = rootSlice.actions;
export default rootSlice.reducer;
