import React from "react";
import bannerB from "../assets/BannerBig.png";
import BG from "../assets/BG.png";
import BGB from "../assets/BG (1).png";
import { ArrowRight, Truck, Headset, Handbag, Box } from "lucide-react";
import ButtonPrimary from "../components/ButtonPrimary";
import Support from "../components/Support";

const Home = () => {
  return (
    <section className="bg-white py-6">
      {/* Hero section */}
      <div className="container mx-auto mb-6">
        {/* Left part */}
        <div className="flex gap-6 items-center justify-center relative">
          <img src={bannerB} alt="" className="w-full  object-cover" />

          <div className="absolute left-15 top-54">
            <h2 className="text-5xl font-bold font-playwrite">
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
              <p className="pt-2 mb-7 font-poppins">
                Free shipping on all your order.
              </p>
            </div>

            <ButtonPrimary
              text="Shop Now"
              icon={
                <span>
                  <ArrowRight />
                </span>
              }
              link="/shop"
              onClick={() => {
                alert("Navigating to shop now!");
              }}
            />
          </div>

          {/* Right part */}
          <div className="w-1/2 flex-row relative">
            {/* top */}
            <img src={BG} alt="" className="w-full  object-cover mb-3" />
            <div className="absolute left-8 top-8 text-black">
              <p>SUMMER SALE</p>
              <p className="pt-2 text-4xl text-black font-bold font-playwrite">
                75% OFF
              </p>
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
                <p className="mt-3 text-4xl font-bold font-playwrite">
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

      {/* Bottom Part */}
      <div className="flex container gap-3 mx-auto items-center justify-around py-10 px-10 rounded-2xl shadow-2xl">
        <Support
          icon={<Truck className="text-green-600 h-10 w-10" />}
          text1="Free Shipping"
          text2="Free shipping on all your order"
        />
        <Support
          icon={<Headset className="text-green-600 h-10 w-10" />}
          text1="Customer Support 24/7"
          text2="Instant access to Support"
        />
        <Support
          icon={<Handbag className="text-green-600 h-10 w-10" />}
          text1="100% Secure Payment"
          text2="We ensure your money is save"
        />
        <Support
          icon={<Box className="text-green-600 h-10 w-10" />}
          text1="Money-Back Guarantee"
          text2="30 Days Money-Back Guarantee"
        />
      </div>
    </section>
  );
};

export default Home;
