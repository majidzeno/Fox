import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Post/Post";
import { getPosts } from "../../Slices/rootSlice";
import axios from "axios";

const posts = [1, 2];

const PostList = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      const posts = res.data;
      const data = [];
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          const users = response.data;
          for (let i = 0; i < posts.length; i++) {
            const currentPost = posts[i];
            const user = users.filter(
              (item) => item.id === currentPost.userId
            )[0];
            data.push({ ...user, ...currentPost });
          }
          dispatch(getPosts(data));
        });
    });
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return <Post post={post} />;
      })}
    </div>
  );
};

export default PostList;
