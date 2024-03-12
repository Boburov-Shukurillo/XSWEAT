import React from "react";

// called img
// import Box from "@mui/material/Box";
// import Slider from "@mui/material/Slider";

import star from "../assets/star.svg";
import starClick from "../assets/star copy.svg";
import { Slider } from "@material-tailwind/react";
import { Box } from "@mui/material";
const Katalog = ({ data, setFilterProduct, filterProduct }) => {
  const clickLike = (e) => {
    let bir = data.map((t) => t.filter((r) => r.id === e));
    bir.map((y) => {
      y.map((o) => {
        if (o.isLike === false) {
          o.isLike = true;
        } else {
          o.isLike = false;
        }
      });
    });
    setLiked(true);
    setLiked(liked === false ? true : false);
  };

  return (
    <div className="containerb flex items-center justify-between">
      <div className="w-1/4"></div>
      <ul className="grid grid-cols-3 w-3/4 gap-20">
        {data.map((prod) => {
          return prod.map((item) => {
            if (
              item.name.toLowerCase().includes(filterProduct.toLowerCase()) &&
              item.size <= 36 &&
              item.color.includes("") &&
              item.price <= 4000 &&
              item.brend.toLowerCase().includes("") &&
              item.color.toLowerCase().includes("")
            ) {
              return (
                <li className="relative">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full border-2 border-dashed border-transparent  hover:border-darkenBlack transition-all"
                  />
                  <button
                    className="absolute top-5 right-5"
                    onClick={() => clickLike(item.id)}
                  >
                    {!item.isLike && (
                      <img src={star} width={20} height={20} alt="star icon" />
                    )}
                    {item.isLike && (
                      <img
                        width={20}
                        height={20}
                        src={starClick}
                        alt="star icon"
                      />
                    )}
                  </button>

                  <div className="h-20 flex flex-col items-start justify-between">
                    <h2 className="text-19 uppercase font-bold roboto">
                      {item.name}
                    </h2>
                    <span className="text-17 roboto text-gray-400">
                      to {item.price} ₽
                    </span>
                  </div>
                </li>
              );
            }
          });
        })}
      </ul>
    </div>
  );
};

export default Katalog;
