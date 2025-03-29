import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./authentication/Login";
import Articles from "./articlepages/Articles"
import Home from "./homepage/Home";
import Lesson from "./lessonpages/Lesson";
import ResetPassword from "./authentication/ResetPassword.jsx";
import Articles from "./articlepages/Articles"
import Home from "./homepage/Home";
import Lesson from "./lessonpages/Lesson";
import Register from "./authentication/Register";
import LearningTutorial from "./coursepages/LearningPage";
import Profile from "./profile/Profile";
import InstructorPage from "./instructorpages/InstructorPage";
import Find from "./pastpaperpages/findpaper/FindPastpaper";

function Navs(){

    return(
        <Router>
            <Routes>

                <Route path="/"  element={<Home/>}/>
                <Route path="/login"  element={<Login/>}/>
                <Route path="/articles" element={<Articles/>}/>
                <Route   path="/"  element={<Home/>}/>
                <Route  path="/lesson"  element={<Lesson/>}/>
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route  path="/login"  element={<Login/>}/>
                <Route  path="/lesson"  element={<Lesson/>}/>
                <Route path="/register"  element={<Register/>}/>
                <Route path="/course"  element={<LearningTutorial/>}/>
                <Route path="/userprofile"  element={<Profile/>}/>
                <Route path="/instr"  element={<InstructorPage/>}/>
                <Route path="/findpp"  element={<Find/>}/>
            </Routes>
        </Router>
    )
}

export default Navs;