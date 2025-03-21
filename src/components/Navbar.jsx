import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Navbar(props) {
  var navColor = "";
  if (props.mode === "light") {
    navColor = "light";
  } else {
    navColor = "dark";
  }
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${navColor} bg-${navColor}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">
                  {props.aboutname}
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <div
                className="bg-primary rounded mx-2"
                onClick={() => {
                  props.toggleMode("primary");
                }}
                style={{ height: "20px", width: "20px", cursor: "pointer" }}
              ></div>
              <div
                className="bg-danger rounded mx-2"
                onClick={() => {
                  props.toggleMode("danger");
                }}
                style={{ height: "20px", width: "20px", cursor: "pointer" }}
              ></div>
              <div
                className="bg-success rounded mx-2"
                onClick={() => {
                  props.toggleMode("success");
                }}
                style={{ height: "20px", width: "20px", cursor: "pointer" }}
              ></div>
              <div
                className="bg-warning rounded mx-2"
                onClick={() => {
                  props.toggleMode("warning");
                }}
                style={{ height: "20px", width: "20px", cursor: "pointer" }}
              ></div>
              <div
                className="bg-light rounded mx-2"
                onClick={() => {
                  props.toggleMode("light");
                }}
                style={{
                  height: "20px",
                  width: "20px",
                  cursor: "pointer",
                  border: "1px solid",
                  borderColor: "black",
                }}
              ></div>
              <div
                className="bg-dark rounded mx-2"
                onClick={() => {
                  props.toggleMode("dark");
                }}
                style={{
                  height: "20px",
                  width: "20px",
                  cursor: "pointer",
                  border: "1px solid",
                  borderColor: "white",
                }}
              ></div>
            </div>
            {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" type="checkbox" role="switch" onClick={() => {props.toggleMode(null)}} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
                    </div>                                        */}
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutname: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Site Name",
  aboutname: "About Site",
};
