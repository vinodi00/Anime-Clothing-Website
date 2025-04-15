import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/shop/Anime">Anime</Link>
      <Link to="/shop/Fastlane">Fastlane</Link>
      <Link to="/shop/BasicTees">Basic Tees</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;
