import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import arrow from "../assets/arrow.svg";
const Header = ({ cart, setCart, PrductData, setProductData }) => {
  const [dropDown, setDropDown] = useState("hidden");

  const openDropDown = () => {
    setDropDown("flex");
    setDropDown(dropDown === "hidden" ? "flex" : "hidden");
  };
  return (
    <header className="py-5 bg-darkenBlack">
      <div className="containerb flex items-center justify-between">
        <Link>
          <img src={logo} alt="" />
        </Link>
        <nav>
          <ul className="flex items-center gap-5 ">
            {/* clothes drop dwon */}
            <li className="flex items-center gap-5 relative w-44 justify-start cursor-pointer">
              <span
                className="text-white text-17 roboto"
                onClick={openDropDown}
              >
                Clothes
              </span>
              <img src={arrow} alt="arrow" />
              <ul
                className={`${dropDown} z-30 absolute top-12 bg-darkenBlack w-full  right-0 p-5 flex-col gap-y-10`}
              >
                <li className="text-base roboto text-white cursor-pointer">
                  Sweaters
                </li>
                <li className="text-base roboto text-white cursor-pointer">
                  Coat
                </li>
                <li className="text-base roboto text-white cursor-pointer">
                  Shorts
                </li>
                <li className="text-base roboto text-white cursor-pointer">
                  Jeans
                </li>
              </ul>
            </li>

            {/* shoes drop down */}
            <li className="flex items-center gap-5 relative w-44 justify-start cursor-pointer">
              <span
                className="text-white text-17 roboto"
                onClick={openDropDown}
              >
                Shoes
              </span>
              <img src={arrow} alt="arrow" />
              <ul
                className={`${dropDown} z-30 absolute top-12 bg-darkenBlack w-full  right-0 p-5 flex-col gap-y-10`}
              >
                <li className="text-base roboto text-white cursor-pointer">
                  Boots
                </li>
                <li className="text-base roboto text-white cursor-pointer">
                  Clogs
                </li>
                <li className="text-base roboto text-white cursor-pointer">
                  Cleats
                </li>
                <li className="text-base roboto text-white cursor-pointer">
                  Climbing Shoes
                </li>
              </ul>
            </li>

            {/* aksesuar drop down */}
            <li className="flex items-center gap-5 relative w-44 justify-start cursor-pointer">
              <span
                className="text-white text-17 roboto"
                onClick={openDropDown}
              >
                Akksesuari
              </span>
              <img src={arrow} alt="arrow" />
              <ul
                className={`${dropDown} z-30 absolute top-12 bg-darkenBlack w-full  right-0 p-5 flex-col gap-y-10`}
              >
                <li className="text-base roboto text-white cursor-pointer">
                  Hats
                </li>
                <li className="text-base roboto text-white cursor-pointer">
                  Bags
                </li>
                <li className="text-base roboto text-white cursor-pointer">
                  Scarves
                </li>
                <li className="text-base roboto text-white cursor-pointer">
                  Eyewear
                </li>
              </ul>
            </li>

            {/* brends drop down */}
            <li className="flex items-center gap-5 relative w-44 justify-start cursor-pointer">
              <span
                className="text-white text-17 roboto"
                onClick={openDropDown}
              >
                Brends
              </span>
              <img src={arrow} alt="arrow" />
              <ul
                className={`${dropDown} z-30 absolute top-12 bg-darkenBlack w-full  right-0 p-5 flex-col gap-y-10`}
              >
                <li className="text-base roboto text-white cursor-pointer">
                  Nike
                </li>
                <li className="text-base roboto text-white cursor-pointer">
                  Adidas
                </li>
                <li className="text-base roboto text-white cursor-pointer">
                  Puma
                </li>
                <li className="text-base roboto text-white cursor-pointer">
                  Jordan
                </li>
              </ul>
            </li>
            <li>
              <Link></Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
