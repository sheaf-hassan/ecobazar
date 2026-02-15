import React from "react";
import { Truck } from "lucide-react";

const Support = ({ icon, text1, text2 }) => {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <div className="text-black">
        <p className="font-bold font-poppins">{text1}</p>
        <p className="text-gray-500 font-poppins">{text2}</p>
      </div>
    </div>
  );
};

export default Support;
