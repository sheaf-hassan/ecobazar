import React from "react";
import { Link } from "react-router-dom";
import { PhoneCall } from "lucide-react";
import { ChevronDown } from "lucide-react";
import Plant1 from "../assets/plant 1.jpg";
import { Search, Heart, Tally1, Handbag } from "lucide-react";

const Navbar = () => {
  return (
    <div>
      {/* search bar */}
      <div className="bg-white">
        <div className=" flex items-center justify-between mx-auto container">
          {/* left side */}
          <div className="flex gap-3 pt-7 pb-7 items-center">
            <img src={Plant1} alt="" className="h-8 w-8" />
            <p className="text-green-900 text-3xl font-sm">Ecobazar</p>
          </div>

          {/* search box */}
          <div className="flex items-center">
            <div className="border-1 border-r-0 border-gray-400 rounded-l-lg pt-6 pb-6 mt-6 mb-6 h-12 w-125 flex">
              <div className="flex items-center">
                <Search className="text-black ml-4" />
                <text className="text-gray-500 ml-2 ">Search</text>
              </div>
            </div>
            <div>
              <button className="text-white bg-green-500 rounded-r-lg h-13 w-25 hover:cursor-pointer">
                Search
              </button>
            </div>
          </div>

          {/* right sight */}
          <div className="flex items-center">
            <div className="flex items-center">
              <Heart className="text-black" />
              <Tally1 className="text-gray-500 ml-3" />
              <Handbag className="text-black" />
            </div>
            <div>
              <p className="text-gray-500 ml-3">Shopping cart:</p>
            </div>
          </div>
        </div>
      </div>

      {/* Nav Items */}
      <div className="flex items-center justify-between container mx-auto pt-5 pb-5">
        <div>
          <ul className="flex items-center justify-center gap-10  text-white ">
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
        <div className="flex  text-white gap-2">
          <PhoneCall />
          <p>(219) 555-0114</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
