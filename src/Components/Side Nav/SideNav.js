import { Link } from "react-router-dom";

import "./nav.css";
const NavSide = () => {
  return (
    <div className="card side">
      <div className="container side">
        <div className="row">
          <div className="col-2">
            <img className="nav-img" alt="icon" />
          </div>

          <div className="col-10">
            <h5 className="card-title side">Amr Mohamed </h5>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h6 className="card-text side">@amr</h6>
          </div>
        </div>
      </div>

      <ul className="list-group list-group-flush">
        <Link to="/" className="list-group-item active" aria-current="true">
          <i className="far fa-home"></i> Feed
        </Link>

        <Link to="/" className="list-group-item">
          <i className="far fa-user-friends"></i> Friends
        </Link>

        <Link to="/" className="list-group-item">
          <i className="fal fa-calendar"></i> Events
        </Link>

        <Link to="/" className="list-group-item">
          <i className="far fa-video"></i> Watch Videos
        </Link>

        <Link to="/" className="list-group-item">
          <i className="fal fa-images"></i> Photos
        </Link>

        <Link to="/" className="list-group-item">
          <i className="fal fa-file-alt"></i> Files
        </Link>

        <Link to="/" className="list-group-item">
          <i className="fal fa-file-alt"></i> Market Place
        </Link>
      </ul>
    </div>
  );
};

export default NavSide;
