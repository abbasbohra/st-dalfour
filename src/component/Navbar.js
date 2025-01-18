import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <header className="header-container">

    <nav className="navbar">
      <div className="brand">
        <img
          src={require("../assets/images/logo.png")}
          alt="Logo"
          className="logo"
        />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/verify">Verify Product</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/ar">العربية</Link>
        </li>
      </ul>
    </nav>
    </header>
  );
};

export default Navbar;
