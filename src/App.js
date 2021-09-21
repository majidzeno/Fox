import "./App.css";
import Header from "./Components/Header/Header";
import PostList from "./Components/Posts/PostList/PostList";
import { Route, Switch } from "react-router-dom";
import AddPost from "./Components/AddPost/AddPost";
import PostDetail from "./Components/PostDetail/PostDetail";

import Loading from "./Components/Loading/Loading";
import NavSide from "./Components/Side Nav/SideNav";

import ProfilePage from './Pages/ProfilePage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./Components/Slices/rootSlice";
import axios from "axios";

const NewPage = (props) => {
  console.log("New Page Props ", props);
  return(
    <div className="container">
      <div className="row">
        <div className="col-lg-2">
          <NavSide />
        </div>

        {props.posts.length === 0 ? 
          <div className="col-lg-8"><Loading /></div> : 
          <div className="col-lg-8"><PostList posts={props.posts} numOfPosts={props.numOfPosts}/></div>
        }

        <div className="col-lg-2">Column</div>
      </div>
    </div>
  );
}

function App() {
  const posts = useSelector((state) => state.posts);

  const numOfPosts = useSelector((state) => state.numOfPosts);
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

                        //setIsLoaded(true);
                        dispatch(addPost(final));
                      })
                      .catch((e) => {
                        console.error(`error getting user ${e}`);
                      });
                  })
                  .catch((e) => {
                    console.error(`error getting comments ${e}`);
                  });
              })
              .catch((e) => {
                console.error(`error getting photo ${e}`);
              });
          }
        })
        .catch((e) => {
          console.error(`error getting posts ${e}`);
        });
    };
    getData();
  }, [dispatch]);

  console.log("Posts", posts);
  console.log("Number of posts", numOfPosts);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" render={(props) => <NewPage {...props} posts={posts} numOfPosts={numOfPosts} />} />
        <Route exact path="/addpost" component={AddPost} />
        <Route
          path="/post/:id"
          render={({ match }) => <PostDetail postId={match.params.id} />}
        />
        <Route path="/profile/:id" render={(props) => <ProfilePage {...props} posts={posts} />}/>
      </Switch>
    </div>
  );
}

export default App;
