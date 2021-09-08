import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  numOfPosts: 6,
  searchValue: "",
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
    addComment: (state, action) => {
      for (let i = 0; i < state.posts.length; i++) {
        if (action.payload.postId === state.posts[i].postId) {
          state.posts[i].comments.push(action.payload.comment);
        }
      }
    },
    changeSearch: (state, action) => {
      state.searchValue = action.payload;
    },
    userAddPost: (state, action) => {
      state.posts.unshift(action.payload);
    },
  },
});

export const {
  getPosts,
  morePosts,
  addPost,
  tooglePostComments,
  addComment,
  changeSearch,
  userAddPost,
} = rootSlice.actions;
export default rootSlice.reducer;
