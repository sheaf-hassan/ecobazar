import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="flex items-center justify-center gap-10 pt-10">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <Link to="/pages">
          <li>Pages</li>
        </Link>
        <Link to="/blog">
          <li>Blog</li>
        </Link>
        <Link to="/about">
          <li>About Us</li>
        </Link>
        <Link to="/contact">
          <li>Contact Us</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
