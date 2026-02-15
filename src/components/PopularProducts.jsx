import React from 'react';
import { Star, Handbag } from 'lucide-react';

const PopularProducts = ({img, text1, text2}) => {
    return (
          <div className="flex flex-col items-center border-2 border-gray-200 hover:border-green-400">
            {img}
            <div className="flex items-center justify-between container mx-auto px-3 pt-3 pb-7">

              <div>
                <p className="text-gray-600 font-poppins">{text1}</p>
                <p className="text-black font-poppins">{text2}</p>
                <div className="flex">
                  <Star className="fill-orange-400 text-orange-400"/>
                  <Star className="fill-orange-400 text-orange-400"/>
                  <Star className="fill-orange-400 text-orange-400"/>
                  <Star className="fill-orange-400 text-orange-400"/>
                  <Star className="fill-gray-400 text-gray-400"/>
                  
                </div>
              </div>
              <div className="text-black bg-gray-300 rounded-full">
                <Handbag className='px-1 py-1'/>
              </div>

            </div>
          </div>
    );
};

export default PopularProducts;