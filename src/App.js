import "./App.css";
import React, { useEffect } from "react";
import Header from "./Components/Header/Header";
import PostList from "./Components/Posts/PostList/PostList";
import { Route, Switch } from "react-router-dom";
import AddPost from "./Components/AddPost/AddPost";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addPost } from "./Components/Slices/rootSlice";
import PostDetail from "./Components/PostDetail/PostDetail";

function App() {
  const dispatch = useDispatch();
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
      <Header />
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route exact path="/addpost" component={AddPost} />
        <Route
          path="/post/:id"
          render={({ match }) => <PostDetail postId={match.params.id} />}
        />
      </Switch>
    </div>
  );
}

export default App;
