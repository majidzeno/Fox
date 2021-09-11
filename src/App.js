import "./App.css";
import Header from "./Components/Header/Header";
import PostList from "./Components/Posts/PostList/PostList";
import { Route, Switch } from "react-router-dom";
import AddPost from "./Components/AddPost/AddPost";
import PostDetail from "./Components/PostDetail/PostDetail";
function App() {
  return (
    <div>
      <p>amr</p>
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
