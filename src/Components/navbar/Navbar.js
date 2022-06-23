import React, { useState } from "react";

export default function Navbar() {
  let [toggle, setToggle] = useState(true); // default Value is true

  let toggleBtn = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success ">
      <a className="navbar-brand ms-4 text-light fw-bold" href="google.com">
        React
      </a>
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
            <a
              className="nav-link active fw-bold text-light"
              aria-current="page"
              href="google.com"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-bold text-light" href="google.com">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-bold text-light" href="google.com">
              Pricing
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle fw-bold text-light"
              href="google.com"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <ul
              className="dropdown-menu  bg-dark me-3"
              labelled="navbarDropdownMenuLink"
            >
              <li>
                <a
                  className="dropdown-item fw-bold text-light bg-dark"
                  href="google.com"
                >
                  Action
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item fw-bold text-light bg-dark"
                  href="google.com"
                >
                  Another action
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item fw-bold text-light bg-dark"
                  href="google.com"
                >
                  Something else here
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
