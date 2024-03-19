import React, { useEffect } from "react";

const Cart = ({ cart, setCart, PrductData }) => {
  return (
    <div>
      {PrductData.map((b) => {
        return b.map((e) => {
          if (e.isCart === true) {
            useEffect(() => {
              setCart((v) => {
                return [...v, e];
              });
            }, []);
            return (
              <li key={e.name}>
                <img src={e.img} alt="" />
                <h3>{e.size}</h3>
              </li>
            );
          }
        });
      })}
    </div>
  );
};

export default Cart;
