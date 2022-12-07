import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="top">
      <h1 className="title">Stackoverflow</h1>
      <input type="text" placeholder="search" className="in"/>
      <div className="all">
        <Link to="/" className="li"> Home</Link>
        <Link to="/Profile" className="li"> Profile</Link>
        <Link to="/Login" className="li">Login</Link>
        <Link to="/Sign" className="li">Sign</Link>
      </div>
    </div>
  );
}

export default Navbar;
