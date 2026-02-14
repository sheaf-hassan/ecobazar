import React from "react";
import bannerB from "../assets/BannerBig.png";
import BG from "../assets/BG.png";
import BGB from "../assets/BG (1).png";
import { Tally1, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <section className="bg-white ">
      {/* Hero section */}
      <div className="container mx-auto py-6">
        {/* Left part */}
        <div className="flex gap-6 items-center justify-center relative">
          <img src={bannerB} alt="" className="w-full  object-cover" />

          <div className="absolute left-15 top-54">
            <h2 className="text-5xl font-bold">
              Fresh & Healthy <br />
              Organic Food
            </h2>

            <div className="mt-7 border-l-2 border-green-500 pl-3">
              <div className="flex items-center gap-2 ">
                <p className="text-2xl font-bold">Sale up to</p>
                <div className="bg-[#FF8A00] rounded h-10 justify-center px-3 py-1">
                  <p className="text-2xl font-bold ">30% OFF</p>
                </div>
              </div>
              <p className="pt-2 mb-7">Free shipping on all your order.</p>
            </div>

            <button className="py-4 px-10 font-medium bg-white text-green-500 rounded-full flex items-center justify-center gap-1 hover:cursor-pointer hover:bg-white/90">
              Shop now
              <span>
                <ArrowRight />
              </span>
            </button>
          </div>

          {/* Right part */}
          <div className="w-1/2 flex-row relative">
            {/* top */}
            <img src={BG} alt="" className="w-full  object-cover mb-3" />
            <div className="absolute left-8 top-8 text-black">
              <p>SUMMER SALE</p>
              <p className="pt-2 text-4xl text-black font-bold">75% OFF</p>
              <p className="pt-3">Only Fruit & Vegetable</p>
              <p className="pt-6 flex gap-2 text-green-600 hover: cursor-pointer">
                Shop Now
                <span>
                  <ArrowRight />
                </span>
              </p>
            </div>

            {/* Bottom */}
            <div className="relative">
              <img src={BGB} alt="" className="w-full object-cover" />

              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full mx-auto text-center">
                <p>Best Deal</p>
                <p className="mt-3 text-4xl font-bold ">
                  Special Products <br />
                  Deal of the Month
                </p>

                <p className="pt-6 flex gap-2 text-green-600 hover: cursor-pointer justify-center">
                  Shop Now
                  <span>
                    <ArrowRight />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
