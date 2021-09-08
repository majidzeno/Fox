import "./App.css";
import Header from "./Components/Header/Header";
import PostList from "./Components/Posts/PostList/PostList";
import { Route, Switch } from "react-router-dom";
import AddPost from "./Components/AddPost/AddPost";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route exact path="/addpost" component={AddPost} />
      </Switch>
    </div>
  );
}

export default App;
