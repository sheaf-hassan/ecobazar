import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const ButtonPrimary = ({ text, icon, link, onClick }) => {
  return (
    <Link to={link}>
      <button
        onClick={onClick}
        className="py-4 px-10 font-medium bg-white text-green-500 rounded-full flex items-center justify-center gap-1 hover:cursor-pointer hover:bg-white/90"
      >
        {text}

        {icon}
      </button>
    </Link>
  );
};

export default ButtonPrimary;
