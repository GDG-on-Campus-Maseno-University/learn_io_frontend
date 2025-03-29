import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./authentication/Login";
// import Home from "./homepage/HomePage";
import Articles from "./articlepages/Articles"
import Home from "./homepage/Home";
import Lesson from "./lessonpages/Lesson";
// import ForgotPassword from "./authentication/ForgotPassword.jsx";
import ResetPassword from "./authentication/ResetPassword.jsx";


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
            </Routes>
        </Router>
    )
}

export default Navs;