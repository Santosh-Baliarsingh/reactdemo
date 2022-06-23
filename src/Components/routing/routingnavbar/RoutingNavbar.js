import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function RoutingNavbar() {
  let [toggle, setToggle] = useState(true); // default Value is true

  let toggleBtn = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
      <Link className="nav-link active fw-bold text-light" to="/home">
         React
      </Link>
      <button
        className="navbar-toggler me-3 bg-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span onClick={toggleBtn} className="navbar-toggler-icon  "></span>
      </button>
      <div
        className={`${toggle ? "collapse" : ""} navbar-collapse`}
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav ps-4 ">
          <li className="nav-item ">
            <Link className="nav-link active fw-bold text-light" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link active fw-bold text-light" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link active fw-bold text-light" to="/contactUs">
              ContactUs
            </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link active fw-bold text-light" to="/productlist">
               ProductList
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
