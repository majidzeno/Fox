import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <p className="navbar-brand">Navbar scroll</p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll scroll-height">
            <li className="nav-item">
              <p className="nav-link active" aria-current="page">
                Home
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link">Link</p>
            </li>
            <li className="nav-item dropdown">
              <p
                className="nav-link dropdown-toggle"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Link
              </p>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li>
                  <p className="dropdown-item">Action</p>
                </li>
                <li>
                  <p className="dropdown-item">Another action</p>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <p className="dropdown-item">Something else here</p>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <p
                className="nav-link disabled"
                tabindex="-1"
                aria-disabled="true"
              >
                Link
              </p>
            </li>
          </ul>
          <form className="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
