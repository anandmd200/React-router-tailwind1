import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div>
      <nav>
        <NavLink to="/dashboard" end>
          Dashboard
        </NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/item/20">Item</NavLink>
      </nav>
    </div>
  );
};

export default Header;
