import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./authentication/Login";
import Home from "./homepage/HomePage";


function Navs(){

    return(
        <Router>
            <Routes>
                <Route   path="/"  element={<Home/>}/>
                <Route  path="/login"  element={<Login/>}/>
            </Routes>
        </Router>
    )
}

export default Navs;