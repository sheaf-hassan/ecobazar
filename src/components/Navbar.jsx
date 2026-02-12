import React from "react";
import { Link } from "react-router-dom";
import { PhoneCall } from "lucide-react";
import { ChevronDown } from "lucide-react";
const Navbar = () => {
  return (
    <div>
      {/* search bar */}
      <div className="bg-white border-10"></div>
      <div className="flex items-center justify-between container mx-auto">
        {/* Nav Items */}
        <div>
          <ul className="flex items-center justify-center gap-10 pt-10 text-white pb-5">
            <Link to="/">
              <li className="flex gap-1">
                Home
                <span>
                  <ChevronDown />
                </span>
              </li>
            </Link>
            <Link to="/shop">
              <li className="flex gap-1">
                Shop
                <span>
                  <ChevronDown />
                </span>
              </li>
            </Link>
            <Link to="/pages">
              <li className="flex gap-1">
                Pages
                <span>
                  <ChevronDown />
                </span>
              </li>
            </Link>
            <Link to="/blog">
              <li className="flex gap-1">
                Blog
                <span>
                  <ChevronDown />
                </span>
              </li>
            </Link>
            <Link to="/about">
              <li>About Us</li>
            </Link>
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>

        {/* Phone Number */}
        <div className="flex pt-10 text-white gap-2">
          <PhoneCall />
          <p>(219) 555-0114</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
