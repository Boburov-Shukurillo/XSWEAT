import React from "react";
import { useLocation } from "react-router-dom";

const Detail = ({ PrductData }) => {
  const location = useLocation();
  let pathName = location.pathname;
  let getNum = pathName.split("/product").join("").length;
  let getIndex = pathName.split("/product").join("").slice(1, getNum);
  return (
    <div>
      {PrductData[getIndex].map((e) => {
        if (e.size === 36) {
          return (
            <li key={e.id}>
              <img src={e.img} alt={e.name + " png"} />
              <h1>{e.name}</h1>
            </li>
          );
        }
      })}
    </div>
  );
};

export default Detail;
