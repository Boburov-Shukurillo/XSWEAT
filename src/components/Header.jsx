import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// img
import logo from "../assets/logo.svg";
import searchIcon from "../assets/searchIcon.png";
import shopIcon from "../assets/shopIcon.svg";
import starIcon from "../assets/starIcon.png";
import userIcon from "../assets/userIcon.png";
import downIcon from "../assets/downIcon.svg";

const Header = ({ setFilterProduct, filterProduct }) => {
  const location = useLocation();
  const katalog = location.pathname === "/katalog";
  return (
    <header className="bg-darkenBlack py-5">
      <div className="containerb flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="header logo" />
        </Link>
        {!katalog && (
          <nav className="w-1/2">
            <ul className="flex w-full justify-between items-center ">
              <li>
                <select className="h-full w-24 bg-darkenBlack text-white font-bold roboto outline-none">
                  <option value="Shoes" selected disabled>
                    Shoes
                  </option>
                  <option value="Nike">Nike</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Adidas">Adidas</option>
                  <option value="Puma">Puma</option>
                </select>
              </li>
              <li>
                <select className="h-full w-28 h-10 bg-darkenBlack text-white font-bold roboto outline-none">
                  <option value="Clothes" selected disabled>
                    Clothes
                  </option>
                  <option value="Nike">Nike</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Adidas">Adidas</option>
                  <option value="Puma">Puma</option>
                </select>
              </li>
              <li>
                <select className="h-full w-32 h-10 bg-darkenBlack text-white font-bold roboto outline-none">
                  <option value="Aksesuar" selected disabled>
                    Aksesuar
                  </option>
                  <option value="Nike">Nike</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Adidas">Adidas</option>
                  <option value="Puma">Puma</option>
                </select>
              </li>
              <li>
                <select className="h-full w-24 h-10 bg-darkenBlack text-white font-bold roboto outline-none">
                  <option value="Brend" selected disabled>
                    Brend
                  </option>
                  <option value="Nike">Nike</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Adidas">Adidas</option>
                  <option value="Puma">Puma</option>
                </select>
              </li>
              <li className="text-white font-bold roboto">
                <Link>Pricing</Link>
              </li>
            </ul>
          </nav>
        )}
        <div
          className={`${
            katalog ? "w-4/5" : "w-1/4"
          } h-10 flex items-center justify-end gap-x-8`}
        >
          <label
            htmlFor="inpt"
            className={`${katalog ? "w-3/4 flex items-center" : ""}`}
          >
            {katalog && (
              <input
                type="text"
                id="inpt"
                value={filterProduct}
                onChange={(e) => setFilterProduct(e.target.value)}
                placeholder="search in katalog products"
                className="w-full px-8 pb-5 pt-4 h-10 border-y-2 border-l-2 border-opacityWhite bg-transparent rounded-l-full text-white outline-none"
              />
            )}
            <Link to="/katalog">
              <img
                src={searchIcon}
                alt="searchIcon icon"
                className={`${
                  katalog
                    ? "border-y-2 border-opacityWhite rounded-r-full p-1.5"
                    : "p-2"
                } w-10 h-10  `}
              />
            </Link>
          </label>

          <div className="w-52 flex items-center gap-x-8">
            <Link to="/liked">
              <img src={starIcon} alt="starIcon icon" />
            </Link>
            <Link>
              <img src={userIcon} alt="userIcon icon" />
            </Link>
            <Link
              to="/korzinka"
              className="w-1/2 h-full flex items-center justify-between"
            >
              <img src={shopIcon} alt="shopIcon icon" />
              <span className="text-ligthGray font-bold">1219₱</span>
              <span className="bg-blue w-7 h-7 rounded-full font-bold text-xs text-white flex items-center justify-center">
                10
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
