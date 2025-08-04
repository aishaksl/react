import React from "react";
import { Link } from "react-router-dom";

function Headers() {
  return (
    <div className="flex flex-row justify-center align-center space-x-8 bg-blue-300 py-3">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Headers;
