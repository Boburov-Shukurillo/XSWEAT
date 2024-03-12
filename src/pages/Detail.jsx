import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import star from "../assets/star.svg";
import starClick from "../assets/star copy.svg";
import Arrow from "../assets/arrow.svg";

const Detail = ({ data }) => {
  const location = useLocation();
  const [filterbySize, setFilterbySize] = useState(36);
  const pathN = location.pathname;
  let id = pathN.split("/product/").join("");
  let bir = data[id];

  // for like
  const [liked, setLiked] = useState(false);
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

  const addToCart = (e) => {
    let bir = data.map((t) => t.filter((r) => r.id === e));
    bir.map((y) => {
      y.map((o) => {
        if (o.isLike === false) {
          o.isCart = true;
        } else {
          o.isCart = false;
        }
      });
    });
    setLiked(true);
    setLiked(liked === false ? true : false);
  };

  const [getPrice, setGetPrice] = useState("");
  const [getSize, setGetSize] = useState("");
  const [isTrue, setTrue] = useState(false);

  return (
    <div className="containerb">
      <div className="py-20">
        <div className="flex items-center justify-start w-full h-1/3 gap-10 mb-10">
          {bir.map((product) => {
            if (product.size === filterbySize) {
              return (
                <li
                  key={product.id}
                  className="flex items-center justify-between w-1/3  bg-white "
                >
                  <div className="relative w-full h-full">
                    <button
                      className="absolute top-5 right-5"
                      onClick={() => clickLike(product.id)}
                    >
                      {!product.isLike && (
                        <img
                          src={star}
                          width={20}
                          height={20}
                          alt="star icon"
                        />
                      )}
                      {product.isLike && (
                        <img
                          width={20}
                          height={20}
                          src={starClick}
                          alt="star icon"
                        />
                      )}
                    </button>
                    <img
                      src={product.img}
                      alt={product.name + " picture"}
                      className="w-full h-1/6 border-2 border-darkenBlack border-dashed rounded-xl "
                    />
                  </div>
                </li>
              );
            }
          })}

          <div className="w-1/3 h-full flex flex-col gap-y-10">
            {bir.map((name) => {
              if (name.size === filterbySize) {
                return (
                  <h2 className="text-3xl font-black uppercase  roboto">
                    {name.name}
                  </h2>
                );
              }
            })}
            <h3 className="text-sm font-semibold  roboto text-gray-400">
              Eu Size:
            </h3>
            <div className="grid grid-cols-5 w-full gap-2.5  roboto">
              {bir.map((r) => {
                if (r.size === filterbySize) {
                  return (
                    <button
                      onClick={() => setFilterbySize(r.size)}
                      className=" roboto h-14 w-full rounded-xl  p-2 text-lg font-semibold leading-3 bg-blue text-white outline-none"
                    >
                      <span className="text-sm">{r.size}</span> <br />{" "}
                      <span className="text-xs font-semibold uppercase   roboto">
                        {r.price}₱
                      </span>
                    </button>
                  );
                } else {
                  return (
                    <button
                      onClick={() => setFilterbySize(r.size)}
                      className=" roboto h-14 w-full rounded-xl border-2 p-2 text-lg font-semibold leading-3 outline-none"
                    >
                      <span className="text-sm">{r.size}</span> <br />{" "}
                      <span className="text-xs font-semibold uppercase text-gray-600  roboto">
                        {r.price}₱
                      </span>
                    </button>
                  );
                }
              })}
            </div>

            <div className="w-full flex">
              {bir.map((name,index) => {
                if (name.size === filterbySize) {
                  return (
                    <li className="flex items-center justify-between w-full">
                      <div className="flex flex-col items-start justify-between">
                        <h2 className="text-2xl font-bold roboto uppercase text-gray-400">
                          {name.price}₱
                        </h2>
                        <h2 className="text-xl font-black uppercase roboto">
                          Size: {name.size}
                        </h2>
                      </div>
                      <button onClick={()=>addToCart(index)} className="w-2/3 bg-darkenBlack  roboto pt-5 pb-5 rounded-xl text-white font-extrabold text-xl robotom flex items-center text-center justify-center gap-5">
                        add to cart{" "}
                        <img src={Arrow} className="w-3 h-5" alt="" />
                      </button>
                    </li>
                  );
                }
              })}
            </div>
          </div>
        </div>

        {bir.map((product) => {
          if (product.size === filterbySize) {
            return (
              <div className="flex flex-col items-start gap-y-5">
                <h2 className="text-sm roboto font-semibold">
                  Product Id{" "}
                  <span className="text-gray-400felx flex-col items-center gap-y-10">
                    ................................
                  </span>{" "}
                  {product.id}
                </h2>
                <h2 className="text-sm roboto font-semibold">
                  Product Type{" "}
                  <span className="text-gray-40felx flex-col items-center gap-y-100">
                    ................................
                  </span>{" "}
                  {product.type}
                </h2>
                <h2 className="text-sm roboto font-semibold">
                  Product Brend{" "}
                  <span className="text-gray-4felx flex-col items-center gap-y-1000">
                    ................................
                  </span>{" "}
                  {product.brend}
                </h2>
                <h2 className="text-sm roboto font-semibold">
                  Product Color{" "}
                  <span className="text-gray-4felx flex-col items-center gap-y-1000">
                    ................................
                  </span>{" "}
                  {product.color}
                </h2>
                <h2 className="text-sm roboto font-semibold">
                  Product Price{" "}
                  <span className="text-gray-400">
                    ................................
                  </span>{" "}
                  {product.price}
                </h2>
              </div>
            );
          }
        })}

        <Swiper
          pagination={true}
          modules={[Pagination, Navigation]}
          slidesPerView={4}
          spaceBetween={50}
          className="detailSwiper"
        >
          {data.map((elem) => {
            return elem.map((product) => {
              if (product.size <= 36) {
                return (
                  <SwiperSlide className="rounded-xl overflow-hidden flex flex-col items-center justify-start gap-y-5 relative">
                    <img
                      src={product.img}
                      className="w-full object-top h-72 "
                      alt={product.name + " " + "png"}
                    />
                    <button
                      className="absolute top-5 right-5"
                      onClick={() => clickLike(product.id)}
                    >
                      {!product.isLike && (
                        <img
                          src={star}
                          width={20}
                          height={20}
                          alt="star icon"
                        />
                      )}
                      {product.isLike && (
                        <img
                          width={20}
                          height={20}
                          src={starClick}
                          alt="star icon"
                        />
                      )}
                    </button>
                    <div className="px-5">
                      <h3 className="text-xl">{product.name}</h3>
                      <h4>{product.price}₱</h4>
                    </div>
                    <button className=" w-3/4  py-3 bg-cyan-700 rounded-lg text-white">
                      Add To Cart
                    </button>
                  </SwiperSlide>
                );
              }
            });
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Detail;
