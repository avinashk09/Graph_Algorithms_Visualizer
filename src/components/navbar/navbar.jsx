import React, { useState, useEffect } from "react";
import './navbar.css';

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
  }, []);

  // Toggle dark mode and save preference to localStorage
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  return (
    <nav
      className={`navbar navbar-light navbar-expand-lg mb-3 ${darkMode ? "navbar-dark" : ""}`}
      style={{ backgroundColor: darkMode ? "#343a40" : "#e3f2fd" }}
    >
      <div className="container-fluid">
        <h3 className={`text-${darkMode ? "light" : "dark"} me-3`}>Graphs Algorithm Visualizer</h3>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <div>
              <span className="material-icons icon">home</span> Origin
            </div>
            <div>
              <span className="material-icons icon">location_on</span> Destination
            </div>
            <div className="block">
              <div className={`wall box ${darkMode ? "navbar-dark" : ""}`}></div>{" "}
              <p className={`d-inline ms-1 text-${darkMode ? "light" : "dark"}`}>Walls</p>
            </div>

            <div className="block">
              <div className={`visited box ${darkMode ? "navbar-dark" : ""}`}></div>{" "}
              <p className={`d-inline ms-1 text-${darkMode ? "light" : "dark"}`}>Visited Nodes</p>
            </div>

            <div className="block">
              <div className={`nonvisited box ${darkMode ? "navbar-dark" : ""}`}></div>{" "}
              <p className={`d-inline ms-1 text-${darkMode ? "light" : "dark"}`}>Unvisited Nodes</p>
            </div>

            <div className="block">
              <div className={`path box ${darkMode ? "navbar-dark" : ""}`}></div>{" "}
              <p className={`d-inline ms-1 text-${darkMode ? "light" : "dark"}`}>Path</p>
            </div>
          </div>
          <button
            className={`btn btn-${darkMode ? "light" : "dark"} ms-3`}
            onClick={toggleDarkMode}
          >
            {darkMode ? "🌙 Dark Mode" : "🌞 Light Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
