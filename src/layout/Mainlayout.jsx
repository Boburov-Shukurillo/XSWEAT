import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Mainlayout = ({ cart, setCart, PrductData, setProductData }) => {
  return (
    <div>
      <Header cart={cart} PrductData={PrductData} setCart={setCart} setProductData={setProductData} />
      <Outlet />
    </div>
  );
};

export default Mainlayout;
