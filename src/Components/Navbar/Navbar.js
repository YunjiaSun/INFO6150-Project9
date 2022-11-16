import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Home </Link>
        <span>👩🏻‍💻</span>

        <Link to="/projects"> Projects </Link>
        <span>📱</span>
      </div>
    </div>
  );
};

export default Navbar;
