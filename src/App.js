import "./App.css";
import Header from "./Components/Header/Header";
import PostList from "./Components/Posts/PostList/PostList";
import { Route, Switch } from "react-router-dom";
import AddPost from "./Components/AddPost/AddPost";
import PostDetail from "./Components/PostDetail/PostDetail";
import NavSide from "./Components/Side Nav/SideNav";
function App() {
  return (
    <div class="container">
      <div class="row">
        <Header />

        <div class="col-lg-2">
          <NavSide />
        </div>

        <div class="col-lg-8">
          <PostList />
        </div>
        
        <div class="col-lg-2">Column</div>
      </div>
    </div>
  );
}

export default App;
