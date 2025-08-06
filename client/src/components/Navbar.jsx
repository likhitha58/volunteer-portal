import React, { useState } from "react";
import "../styles/Navbar.css"; // Make sure this path is correct

const Navbar = () => {
  const [showAbout, setShowAbout] = useState(false);

  const handleAboutClick = () => {
    setShowAbout(!showAbout);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg glass-navbar fixed-top px-4 py-2 rounded-4">
        <div className="container-fluid">
          <a className="navbar-brand text-white fw-bold fs-4" href="#">
            <i className="bi bi-globe-americas me-2"></i>Basti Ki Pathshala
          </a>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <button className="nav-link btn btn-link text-white" onClick={handleAboutClick}>
                  About
                </button>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#programs">
                  Programs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#impact">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-outline-light rounded-pill px-4" href="#donate">
                  Donate
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* About Section Toggle */}
      {showAbout && (
        <div className="about-glass-popup">
          <div className="about-container p-5 rounded-4">
            <button className="btn btn-close float-end" onClick={handleAboutClick}></button>
            <h2 className="mb-4">About Basti Ki Pathshala</h2>
            <p>
              <strong>Basti Ki Pathshala</strong> is a volunteer-led initiative that brings education, resources, and hope to children in underserved communities.
            </p>
            <p>
              Our mission is to ensure that every child—regardless of their socioeconomic background—has access to basic education, life skills, and opportunities to dream big.
            </p>
            <p>
              With the help of selfless volunteers and generous donors, we conduct daily learning sessions, workshops, and creative programs in slums and bastis.
            </p>
            <p>
              Join us as we continue to bridge the gap in education and build brighter futures—one child at a time.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
