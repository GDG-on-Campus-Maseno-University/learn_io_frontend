import React from "react";
import SidePanel from "../coursepages/SidePanel";
import LearningNavBar from "../coursepages/learningnav";
import "../styles/learningpage.css";

function LearningTutorial() {
  return (
    <div className="tutorial-container">
      <header className="header">
        <LearningNavBar />
      </header>

      <div className="content-wrapper">
        <SidePanel />

        <main className="main-content">
          <h1>Python Tutorial</h1>
          <div className="nav-buttons">
            <button>Previous</button>
            <button className="next-button">Next</button>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s...
          </p>
        </main>
      </div>
    </div>
  );
}

export default LearningTutorial;
