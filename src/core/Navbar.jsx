import React from "react";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    
      <nav className="navbar">
        <Link to="/" className="nav-anchor">
          Home
        </Link>
        <Link to="/search" className="nav-anchor">
          Search
        </Link>
        <Link to="/forecast" className="nav-anchor">
          Forecast
        </Link>
        <Link to="/about" className="nav-anchor">
          About
        </Link>
      </nav>
    
  );
};

export default Navbar;
