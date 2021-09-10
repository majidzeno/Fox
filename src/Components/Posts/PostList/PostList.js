import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Post/Post";
import { morePosts, addPost } from "../../Slices/rootSlice";
import axios from "axios";
import "./PostList.css";

const PostList = () => {
  const posts = useSelector((state) => state.posts);
  const numOfPosts = useSelector((state) => state.numOfPosts);
  const searchValue = useSelector((state) => state.searchValue);
  const dispatch = useDispatch();
  console.log(searchValue);
  useEffect(() => {
    const getData = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          const allPosts = res.data;
          for (let i = 0; i < allPosts.length; i++) {
            let currentPost = allPosts[i];
            axios
              .get(`https://jsonplaceholder.typicode.com/photos?id=${i + 1}`)
              .then((res) => {
                let photo = res.data[0];
                axios
                  .get(
                    `https://jsonplaceholder.typicode.com/comments?postId=${
                      i + 1
                    }`
                  )
                  .then((res) => {
                    let comments = res.data;
                    axios
                      .get(
                        `https://jsonplaceholder.typicode.com/users?id=${currentPost.userId}`
                      )
                      .then((res) => {
                        const user = res.data[0];
                        const final = {
                          userId: currentPost.userId,
                          name: user.name,
                          username: user.username,
                          email: user.email,
                          postId: currentPost.id,
                          url: photo.url,
                          thumbnailUrl: photo.thumbnailUrl,
                          title: currentPost.title,
                          body: currentPost.body,
                          comments: comments,
                          showComments: false,
                        };

                        dispatch(addPost(final));
                      })
                      .catch((e) => {
                        console.log(`error getting user ${e}`);
                      });
                  })
                  .catch((e) => {
                    console.log(`error getting comments ${e}`);
                  });
              })
              .catch((e) => {
                console.log(`error getting photo ${e}`);
              });
          }
        })
        .catch((e) => {
          console.log(`error getting posts ${e}`);
        });
    };
    getData();
  }, [dispatch]);

  return (
    <div>
      {posts
        .filter((post) => {
          return post.name.toLowerCase().includes(searchValue.toLowerCase());
        })
        .map((post, index) => {
          if (index < numOfPosts) {
            return <Post post={post} />;
          } else {
            return null;
          }
        })}
      <div className="moreBtn">
        <button
          onClick={() => {
            dispatch(morePosts());
          }}
          type="button"
          class="btn btn-info"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default PostList;
