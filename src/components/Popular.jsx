import React from 'react';

const Popular = ({img, text}) => {
    return (
        <div className="flex flex-col items-center border-2 border-gray-200 rounded-xl hover:border-green-400 ">
          {img}
          <p className="text-black font-poppins mx-5 pt-4 pb-6 ">{text}</p>
         </div>
    );
};

export default Popular;