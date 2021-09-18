import { Link } from "react-router-dom";
import icon from "./favicon.ico";
import "./nav.css";
const NavSide = () => {
  return (
    <div className="card side">
      <div class="container side">
        <div class="row">
          <div class="col-2">
            <img src={icon} className="nav-img" alt="icon" />
          </div>

          <div class="col-10">
            <h5 className="card-title side">Amr Mohamed </h5>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <h6 className="card-text side">@amr</h6>
          </div>
        </div>
      </div>

      <ul className="list-group list-group-flush">
        <Link to="/" className="list-group-item active" aria-current="true">
          <i class="far fa-home"></i> Feed
        </Link>

        <Link to="/" className="list-group-item">
          <i class="far fa-user-friends"></i> Friends
        </Link>

        <Link to="/" className="list-group-item">
          <i class="fal fa-calendar"></i> Events
        </Link>

        <Link to="/" className="list-group-item">
          <i class="far fa-video"></i> Watch Videos
        </Link>

        <Link to="/" className="list-group-item">
          <i class="fal fa-images"></i> Photos
        </Link>

        <Link to="/" className="list-group-item">
          <i class="fal fa-file-alt"></i> Files
        </Link>

        <Link to="/" className="list-group-item">
          <i class="fal fa-file-alt"></i> Market Place
        </Link>
      </ul>
    </div>
  );
};

export default NavSide;
