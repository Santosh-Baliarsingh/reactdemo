import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './RoutingNavBar.css'

export default function RoutingNavbar() {
  let [toggle, setToggle] = useState(true); // default Value is true

  let toggleBtn = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
      <NavLink className="nav-link active fw-bold  h4" to="/">
         React
      </NavLink>
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
        <ul className="navbar-nav px-4  ">
          <li className="nav-item ms-2">
            <NavLink className="nav-link  fw-bold text-light" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item ms-2">
          <NavLink className="nav-link  fw-bold text-light" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item mx-2">
          <NavLink className="nav-link  fw-bold text-light" to="/contactUs">
              ContactUs
            </NavLink>
          </li>
          <li className="nav-item mx-2">
          <NavLink className="nav-link fw-bold text-light" to="/productlist">
               ProductList
            </NavLink>
          </li>
          <li className="nav-item mx-2">
          <NavLink className="nav-link fw-bold text-light" to="/productlist2">
               ProductList2
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
