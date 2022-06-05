import React from 'react';


export default function Navbar() {
  return (
  
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="google.com">React</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="google.com">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="google.com">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="google.com">Pricing</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="google.com" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu" labelled="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="google.com">Action</a></li>
            <li><a className="dropdown-item" href="google.com">Another action</a></li>
            <li><a className="dropdown-item" href="google.com">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
</nav>
  )
}

