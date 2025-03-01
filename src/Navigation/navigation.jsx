import React from "react";
import "../assets/styles.css";

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="stickman">🚶</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Lessons</a></li>
        <li><a href="#">Articles</a></li>
        <li><a href="#">Past Papers</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
