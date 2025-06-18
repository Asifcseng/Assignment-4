import React from "react";
import "./NavBar.css";
import { Link } from "react-router";

function NavBar() {
  return (
    <nav className="navbar">
      <img
        src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740"
        alt=""
      />
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/About">
        About
      </Link>
      <Link className="nav-link" to="/User">
        User
      </Link>
    </nav>
  );
}

export default NavBar;
