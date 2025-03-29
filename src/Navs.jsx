import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./authentication/Login";
import Home from "./homepage/HomePage";
import Articles from "./articlepages/Articles"
import Home from "./homepage/Home";
import Lesson from "./lessonpages/Lesson";


function Navs(){

    return(
        <Router>
            <Routes>

                <Route path="/"  element={<Home/>}/>
                <Route path="/login"  element={<Login/>}/>
                <Route path="/articles" element={<Articles/>}
                <Route   path="/"  element={<Home/>}/>
                <Route  path="/login"  element={<Login/>}/>
                <Route  path="/lesson"  element={<Lesson/>}/>
            </Routes>
        </Router>
    )
}

export default Navs;