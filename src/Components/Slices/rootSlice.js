import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  numOfPosts: 6,
};

const rootSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    morePosts: (state) => {
      if (state.numOfPosts <= 94) {
        state.numOfPosts += 6;
      }
    },
    tooglePostComments: (state, action) => {
      for (let i = 0; i < state.posts.length; i++) {
        if (action.payload === state.posts[i].postId) {
          state.posts[i].showComments = !state.posts[i].showComments;
        }
      }
    },
  },
});

export const { getPosts, morePosts, addPost, tooglePostComments } =
  rootSlice.actions;
export default rootSlice.reducer;
