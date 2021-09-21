import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Post/Post";
import { morePosts } from "../../Slices/rootSlice";
import "./PostList.css";

const PostList = ({posts, numOfPosts}) => {
  console.log("Posts ", posts);
  const searchValue = useSelector((state) => state.searchValue);
  const dispatch = useDispatch();
  console.log(searchValue);

  return (
    <div>
      {posts
        .filter((post) => {
          return post.name.toLowerCase().includes(searchValue.toLowerCase());
        })
        .map((post, index) => {
          if (index < numOfPosts) {
            return <Post key={index} post={post}/>;
          } else {
            return null;
          }
        })}
      <div className="moreBtn">
        {posts.length === 0 ? null : 
          <button
            onClick={() => {
              dispatch(morePosts());
            }}
            type="button"
            className="btn btn-info"
          >
            See More
          </button>}
      </div>
    </div>
  );
};

export default PostList;
