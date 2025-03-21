// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import ProfileViewButton from "./Profile/ProfileViewButton";

const Navbar = () => {
  return (
    <nav className="bg-[#094E51] p-4 flex justify-between items-center text-white shadow-md">
      <div className="text-2xl font-bold">Learn IO</div>
      <div className="space-x-6">
        <Link to="/" className="hover:text-[#FFA500]">Home</Link>
        <Link to="/courses" className="hover:text-[#FFA500]">Courses</Link>
        <Link to="/about" className="hover:text-[#FFA500]">About</Link>
        <ProfileViewButton />
      </div>
    </nav>
  );
};

export default Navbar;