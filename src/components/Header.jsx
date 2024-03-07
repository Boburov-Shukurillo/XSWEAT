import React, { useState } from "react";
import { Link } from "react-router-dom";
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
const Header = () => {
  return (
    <header className="bg-darkenBlack py-5">
      <div className="containerb flex items-center justify-between">
        <img src={logo} alt="" />

        <nav className="w-1/2">
          <ul className="flex w-full justify-between items-center">
            <li>
              {/* <select className="bg-darkenBlack text-white outline-none">
                <option value="shoes">shoes</option>
                <Link to="/about">
                  <option value="nike">nike</option>
                </Link>
                <option value="adidas">adidas</option>
                <option value="puma">puma</option>
                <option value="jordan">jordan</option>
              </select> */}
            </li>
          </ul>
        </nav>

        <div className="flex w-1/6 justify-between items-center">
          <button>
            <img src={searchIcon} alt="searchIcon icon" />
          </button>
          <Link>
            <img src={starIcon} alt="starIcon icon" />
          </Link>
          <Link>
            <img src={userIcon} alt="userIcon icon" />
          </Link>
          <div className="w-1/2 h-full flex items-center justify-between">
            <img src={shopIcon} alt="shopIcon icon" />
            <span className="text-ligthGray font-bold">1219₱</span>
            <span className="bg-blue w-7 h-7 rounded-full font-bold text-xs text-white flex items-center justify-center">
              10
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
