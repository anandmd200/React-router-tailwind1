import React from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    const Iscomfirmed = window.confirm("Are u sure to Logout");
    if (Iscomfirmed) {
      localStorage.clear();
      navigate("/login")
    }

  }
  return (
    <aside className="w-64 bg-white shadow-md hidden md:block">
      <div className="p-6 font-bold text-2xl text-red-600 no-underline font-mono hover:animate-bounce cursor-pointer">
        Lo_Go
      </div>






      <nav className="p-4 space-y-2">
        <Link to="/home" className="block px-4 py-2 rounded hover:bg-gray-200">
          Home
        </Link>
        <Link to="/profile" className="block px-4 py-2 rounded hover:bg-gray-200">
          Profile
        </Link>
        <Link to="/dashboard" className="block px-4 py-2 rounded hover:bg-gray-200">
          Dashboard
        </Link>
        <Link to="/item" className="block px-4 py-2 rounded hover:bg-gray-200">
          Items
        </Link>

        <Link to="/contact" className="block px-4 py-2 rounded hover:bg-gray-200">
          Contact Us
        </Link>
        <button
          onClick={logout}
          className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1" />
          </svg>
          Logout
        </button>
        

      </nav>
    </aside>

  );
};

export default Navbar;
