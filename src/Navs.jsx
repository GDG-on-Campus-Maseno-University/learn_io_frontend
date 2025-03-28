import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./authentication/Login";
import Home from "./homepage/HomePage";
import Articles from "./articlepages/Articles"


function Navs(){

    return(
        <Router>
            <Routes>
                <Route path="/"  element={<Home/>}/>
                <Route path="/login"  element={<Login/>}/>
                <Route path="/articles" element={<Articles/>}/>
            </Routes>
        </Router>
    )
}

export default Navs;