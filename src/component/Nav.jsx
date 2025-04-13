import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">MyApp</div>

        {/* Nav Links */}
        <div className="space-x-6 hidden md:flex">
          <Link
            to="/login"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Login
          </Link>
          <Link
            to="/dashboard"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Dashboard
          </Link>
          <Link
            to="/profile"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Profile
          </Link>
          <Link
            to="/items"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Items
          </Link>
        </div>

        {/* Optional Mobile Menu Button */}
        <div className="md:hidden">
          {/* You can add a hamburger icon and mobile menu here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
