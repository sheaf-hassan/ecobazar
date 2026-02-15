import React from "react";
import bannerB from "../assets/BannerBig.png";
import BG from "../assets/BG.png";
import BGB from "../assets/BG (1).png";
import P1 from "../assets/p1.png";
import P2 from "../assets/p2.png";
import P3 from "../assets/p3.png";
import P4 from "../assets/p4.png";
import P5 from "../assets/p5.png";
import P6 from "../assets/p6.png";
import P7 from "../assets/p7.png";
import P8 from "../assets/p8.png";
import P9 from "../assets/p9.png";
import P10 from "../assets/p10.png";
import P11 from "../assets/p11.png";
import P12 from "../assets/p12.png";
import pp1 from "../assets/pp1.png";
import pp2 from "../assets/pp2.png";
import pp3 from "../assets/pp3.png";
import pp4 from "../assets/pp4.png";
import pp5 from "../assets/pp5.png";
import pp6 from "../assets/pp6.png";
import pp7 from "../assets/pp7.png";
import pp8 from "../assets/pp8.png";
import pp9 from "../assets/pp9.png";
import pp10 from "../assets/pp10.png";
import C1 from "../assets/c1.png";
import C2 from "../assets/c2.png";
import C3 from "../assets/c3.png";
import { ArrowRight, Truck, Headset, Handbag, Box, Star } from "lucide-react";
import ButtonPrimary from "../components/ButtonPrimary";
import Support from "../components/Support";
import Popular from "../components/Popular";
import PopularProducts from "../components/PopularProducts";

const Home = () => {
  return (
    <section className="bg-white ">
      {/* Hero section */}
      <div className="container mx-auto py-6 px-5">
        <div className="flex-col xl:flex-row flex gap-6">
          {/* Left part */}
          <div className="relative">
            <img src={bannerB} alt="" className="w-full h-full object-cover" />

            <div className="absolute left-6 lg:left-15 top-8 lg:top-24">
              <h2 className="text-lg lg:text-5xl font-bold font-playwrite">
                Fresh & Healthy <br />
                Organic Food
              </h2>

              <div className="mt-4 lg:mt-7 border-l-2 border-green-500 pl-3">
                <div className="flex items-center gap-2 ">
                  <p className="text-sm lg:text-2xl font-bold">Sale up to</p>
                  <div className="bg-[#FF8A00] rounded justify-center px-3 py-1">
                    <p className="text-sm lg:text-2xl font-bold ">30% OFF</p>
                  </div>
                </div>
                <p className="pt-2 mb-7 text-sm lg:text-base font-poppins">
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
          </div>

          {/* Right part */}
          <div className="flex-col flex gap-6">
            {/* top */}
            <div className="relative">
              <img src={BG} alt="" className="w-full h-full object-cover" />

              <div className="absolute left-8 top-8 text-black">
                <p className="text-xs sm:text-sm md:text-2xl lg:text-xl">SUMMER SALE</p>
                <p className="pt-2 text-4xl sm:text-2xl md:text-5xl xl:text-2xl text-black font-bold font-playwrite ">
                  75% OFF
                </p>
                <p className="pt-3 text-xs md:text-xl xl:text-sm text-gray-600">Only Fruit & Vegetable</p>
                <p className="pt-6 flex gap-2 text-green-600 hover: cursor-pointer text-xs sm:text-sm md:text-lg lg:text-xl">
                  Shop Now
                  <span>
                    <ArrowRight />
                  </span>
                </p>
              </div>
            </div>

            {/* Bottom */}
            <div className="relative">
              <img src={BGB} alt="" className="w-full h-full object-cover" />

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
      <div className=" hidden flex container gap-3 mx-auto items-center justify-around py-10 px-10 rounded-2xl shadow-xl">
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

      {/* Popular Categories */}
      <div className=" hidden pb-15 pt-15">
        <div className="flex px-0 py-0 items-center justify-between  container mx-auto">
          <h2 className="text-2xl text-black font-bold font-poppins">
            Popular Categories
          </h2>
          <text className="text-green-600 font-poppins flex gap-1 hover:cursor-pointer">
            View All
            <span>
              <ArrowRight />
            </span>
          </text>
        </div>

        {/* Products */}
        <div className="grid grid-cols-6 gap-6 container mx-auto pt-8  ">
          <Popular img={<img src={P1} />} text="Fresh Fruit" />
          <Popular img={<img src={P2} />} text="Fresh Vegetables" />
          <Popular img={<img src={P3} />} text="Meat & Fish" />
          <Popular img={<img src={P4} />} text="Snacks" />
          <Popular img={<img src={P5} />} text="Beverages" />
          <Popular img={<img src={P6} />} text="Beauty & Health" />
          <Popular img={<img src={P7} />} text="Bread & Bakery" />
          <Popular img={<img src={P8} />} text="Baking Needs" />
          <Popular img={<img src={P9} />} text="Cooking" />
          <Popular img={<img src={P10} />} text="Diabetic Food" />
          <Popular img={<img src={P11} />} text="Dish Detergents" />
          <Popular img={<img src={P12} />} text="Oil" />
        </div>
      </div>

      {/* Popular Products */}
      <div className="pb-15 hidden">
        <div className="flex px-0 pb-8 items-center justify-between  container mx-auto">
          <h2 className="text-2xl text-black font-bold font-poppins">
            Popular Products
          </h2>
          <text className="text-green-600 font-poppins flex gap-1 hover:cursor-pointer">
            View All
            <span>
              <ArrowRight />
            </span>
          </text>
        </div>

        {/* Products */}
        <div className="grid grid-cols-5 mx-auto container">
          <PopularProducts
            img={<img src={pp1} />}
            text1="Green Apple"
            text2="$14.99"
          />
          <PopularProducts
            img={<img src={pp2} />}
            text1="Fresh Indian Malta"
            text2="$20.00"
          />
          <PopularProducts
            img={<img src={pp3} />}
            text1="Chinese cabbage"
            text2="$12.00"
          />
          <PopularProducts
            img={<img src={pp4} />}
            text1="Green Lettuce"
            text2="$9.00"
          />
          <PopularProducts
            img={<img src={pp5} />}
            text1="Eggplant"
            text2="$34.00"
          />
          <PopularProducts
            img={<img src={pp6} />}
            text1="Big Potatoes"
            text2="$20.00"
          />
          <PopularProducts
            img={<img src={pp7} />}
            text1="Corn"
            text2="$20.00"
          />
          <PopularProducts
            img={<img src={pp8} />}
            text1="Fresh Cauliflower"
            text2="$12.00"
          />
          <PopularProducts
            img={<img src={pp9} />}
            text1="Green Capsicum"
            text2="$9.00"
          />
          <PopularProducts
            img={<img src={pp10} />}
            text1="Green Chili"
            text2="$34.00"
          />
        </div>
      </div>

      {/* Card */}
      <div className=" hidden grid grid-cols-3 container  gap-6 mx-auto pb-15">
        <div className="relative">
          <img src={C1} alt="" />
          <div className="absolute top-9 inset-x-0 text-center place-items-center">
            <p className="text-white font-poppins pb-4">Best Deals</p>
            <h2 className="text-white font-poppins text-3xl font-bold pb-8">
              Sale of the Month
            </h2>
            <div>
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
          </div>
        </div>

        <div className="relative">
          <img src={C2} alt="" />
          <div className="absolute top-9 inset-x-0 text-center place-items-center">
            <p className="text-white font-poppins pb-4">85% Fat Free</p>
            <h2 className="text-white font-poppins text-3xl font-bold pb-8">
              Low-Fat Meat
            </h2>
            <p className="text-white font-poppins pb-8">
              Best Deals Started at $79.99
            </p>
            <div>
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
          </div>
        </div>

        <div className="relative">
          <img src={C3} alt="" />
          <div className="absolute top-9 inset-x-0 text-center place-items-center">
            <p className="text-black font-poppins pb-4">Summer Sale</p>
            <h2 className="text-black font-poppins text-3xl font-bold">
              100% Fresh Fruit
            </h2>

            <div className="flex items-center justify-center gap-2 pt-2 pb-6">
              <p className="text-black font-poppins">Up to</p>
              <p className="text-yellow-400 px-2 py-1 bg-black rounded">
                64% OFF
              </p>
            </div>
            <div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
