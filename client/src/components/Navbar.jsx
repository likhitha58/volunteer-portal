import React from "react";
import "../styles/Navbar.css"; // Custom styles

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg glass-navbar fixed-top px-4 py-2 rounded-4">
      <div className="container-fluid">
        <a className="navbar-brand text-white fw-bold fs-4" href="#">
          <i className="bi bi-globe-americas me-2"></i>Voices United
        </a>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon text-white"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#programs">Programs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#impact">Impact</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-outline-light rounded-pill px-4" href="#donate">Donate</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
