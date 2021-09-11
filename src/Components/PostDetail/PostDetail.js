import React from "react";
import { useSelector } from "react-redux";
import Post from "../Posts/Post/Post";

const PostDetail = ({ postId }) => {
  const posts = useSelector((state) => state.posts);
  let currentPost = {};

  for (let i = 0; i < posts.length; i++) {
    if (posts[i].postId == postId) {
      currentPost = posts[i];
    }
  }
  console.log(currentPost);

  return (
    <div>
      <h1>masa2 el 5eir</h1>
      <Post post={currentPost} />
    </div>
  );
};

export default PostDetail;
