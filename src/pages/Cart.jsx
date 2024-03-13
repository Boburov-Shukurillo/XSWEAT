import React from "react";

const Cart = ({ cart, PrductData }) => {
  return (
    <div>
      {PrductData.map((b) => {
        return b.map((e) => {
          return (
            <li key={e.name}>
              <img src={e.img} alt="" />
              <h3>{e.size}</h3>
            </li>
          );
        });
      })}
    </div>
  );
};

export default Cart;
