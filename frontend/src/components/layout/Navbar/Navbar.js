import React from "react";
import "./Navbar.css";

import { Redirect, Link } from "react-router-dom";

function Navbar(props) {
  {
    return (
      <header className="navbar navbar-light sticky-top nav-bg flex-md-nowrap p-0 shadow">
        <Link className="col-md-3 col-lg-2 me-0 px-3 optask-brand-text" to="/">
          <img
            src={""}
            alt="OpTask Logo"
            className="me-1"
            style={{ width: "35px", height: "35px" }}
          />
          ProDash
        </Link>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <button className="btn nav-bar-sign-out">Sign out</button>
          </li>
        </ul>
      </header>
    );
  }
}

export default Navbar;
