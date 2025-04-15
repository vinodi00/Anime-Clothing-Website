import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa';
import logo from '../assets/logo.png'; // ensure logo path is correct
import './Nav.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Tora Tee Logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/shop/basic-tees">Basic Tees</Link>
          <Link to="/shop/hoodies">Hoodies</Link>
          <Link to="/custom-order">Custom Order</Link>
        </nav>

        {/* Icons */}
        <div className="navbar-icons">
          <FaSearch className="icon" title="Search" />
          <FaUser className="icon" title="Account" />
          <FaShoppingCart className="icon" title="Cart" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
