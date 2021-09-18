import "./App.css";
import Header from "./Components/Header/Header";
import PostList from "./Components/Posts/PostList/PostList";
import { Route, Switch } from "react-router-dom";
import AddPost from "./Components/AddPost/AddPost";
import PostDetail from "./Components/PostDetail/PostDetail";
import ProfilePage from './Pages/ProfilePage';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./Components/Slices/rootSlice";
import axios from "axios";

function App() {
  const posts = useSelector((state) => state.posts);
  const numOfPosts = useSelector((state) => state.numOfPosts);
  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = useState(false);

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

                        setIsLoaded(true);
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

  console.log("Posts", posts);
  console.log("Number of posts", numOfPosts);

  if(!isLoaded){
    return <h1>Loading...</h1>
  }
  else{
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render={(props) => <PostList {...props} posts={posts} numOfPosts={numOfPosts} />} />
          <Route exact path="/addpost" component={AddPost} />
          <Route
            path="/post/:id"
            render={({ match }) => <PostDetail postId={match.params.id} />}
          />
          <Route path="/profile/:id" render={(props) => <ProfilePage {...props} posts={posts} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
