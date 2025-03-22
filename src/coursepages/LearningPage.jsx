import React from "react";
import SidePanel from "./SidePanel";
import "../styles/learningpage.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function LearningTutorial() {
  return (
    <>

    <Header/>

    <div className="tutorial-container">

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
    <Footer/>
    </>
  );
}

export default LearningTutorial;
