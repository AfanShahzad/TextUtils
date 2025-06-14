import React from "react";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <React.Fragment>
      <nav
        style={{ zIndex: "1" }}
        className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/"> */}
                <a className="nav-link active" aria-current="page" href="#">
                  {props.navItem1}
                </a>
                {/* </Link> */}
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.navItem2}
                </Link>
              </li> */}
            </ul>

            <div
              className={`mx-lg-3 form-check form-switch text-${
                props.mode == "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="switchCheckDefault"
                onClick={props.toggleMode}
              />
              <label className="form-check-label" htmlFor="switchCheckDefault">
                {props.mode == "light" ? "dark" : "light"} Mode
              </label>
            </div>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
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
    </React.Fragment>
  );
}
