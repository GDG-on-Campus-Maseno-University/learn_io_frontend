import React from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

const ProfileViewButton = () => {
  return (
    <Link
      to="/profile"
      className="bg-[#FFA500] px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-[#e69500] transition-all"
    >
      <User className="w-5 h-5" />
      <span>Profile</span>
    </Link>
  );
};

export default ProfileViewButton;
