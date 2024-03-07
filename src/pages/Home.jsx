import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, History } from "swiper/modules";
import arrowWhite from "../assets/arrow.svg";
import font from "../assets/Font.svg";
import heroSlideImg from "../assets/HeroSlideImg.jpeg";
import star from "../assets/star.svg";
import { Link } from "react-router-dom";
import { data } from "../data";
const Home = () => {
  data.map((products) => {
    products.map((product) => {
      if (product.size < 37) {
        console.log(product.id);
      }
    });
  });
  return (
    <div className="containerb">
      <div className="flex py-12 items-center justify-center">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="bg-hero-pattern bg-cover rounded-xl overflow-hidden p-20 flex flex-col items-start justify-center gap-y-5">
            <span className="text-51 inline-block font-extrabold text-darkenBlack roboto tracking-widest leading-05">
              <img src={font} alt="" />
            </span>
            <p className="text-xl font-medium w-2/5 text-darkenBlack">
              Одежда от известные брендов у нас в каталоге. Только качественные
              вещи.
            </p>
            <Link className="py-6 px-7 bg-darkenBlack text-white text-xs font-extrabold rounded-lg flex items-center justify-center gap-x-5 w-1/4">
              Перейти в каталог <img src={arrowWhite} alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="bg-hero-patern2 bg-cover rounded-xl overflow-hidden p-20 flex flex-col items-start justify-center gap-y-5">
            <span className="text-51 inline-block font-extrabold text-darkenBlack roboto tracking-widest leading-05">
              <img src={font} alt="" />
            </span>
            <p className="text-xl font-medium w-2/5 text-darkenBlack">
              Одежда от известные брендов у нас в каталоге. Только качественные
              вещи.
            </p>
            <Link className="py-6 px-7 bg-darkenBlack text-white text-xs font-extrabold rounded-lg flex items-center justify-center gap-x-5 w-1/4">
              Перейти в каталог <img src={arrowWhite} alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="bg-hero-pattern bg-cover rounded-xl overflow-hidden p-20 flex flex-col items-start justify-center gap-y-5">
            <span className="text-51 inline-block font-extrabold text-darkenBlack roboto tracking-widest leading-05">
              <img src={font} alt="" />
            </span>
            <p className="text-xl font-medium w-2/5 text-darkenBlack">
              Одежда от известные брендов у нас в каталоге. Только качественные
              вещи.
            </p>
            <Link className="py-6 px-7 bg-darkenBlack text-white text-xs font-extrabold rounded-lg flex items-center justify-center gap-x-5 w-1/4">
              Перейти в каталог <img src={arrowWhite} alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="bg-hero-pattern bg-cover rounded-xl overflow-hidden p-20 flex flex-col items-start justify-center gap-y-5">
            <span className="text-51 inline-block font-extrabold text-darkenBlack roboto tracking-widest leading-05">
              <img src={font} alt="" />
            </span>
            <p className="text-xl font-medium w-2/5 text-darkenBlack">
              Одежда от известные брендов у нас в каталоге. Только качественные
              вещи.
            </p>
            <Link className="py-6 px-7 bg-darkenBlack text-white text-xs font-extrabold rounded-lg flex items-center justify-center gap-x-5 w-1/4">
              Перейти в каталог <img src={arrowWhite} alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="bg-hero-patern2 bg-cover rounded-xl overflow-hidden p-20 flex flex-col items-start justify-center gap-y-5">
            <span className="text-51 inline-block font-extrabold text-darkenBlack roboto tracking-widest leading-05">
              <img src={font} alt="" />
            </span>
            <p className="text-xl font-medium w-2/5 text-darkenBlack">
              Одежда от известные брендов у нас в каталоге. Только качественные
              вещи.
            </p>
            <Link className="py-6 px-7 bg-darkenBlack text-white text-xs font-extrabold rounded-lg flex items-center justify-center gap-x-5 w-1/4">
              Перейти в каталог <img src={arrowWhite} alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="bg-hero-pattern bg-cover rounded-xl overflow-hidden p-20 flex flex-col items-start justify-center gap-y-5">
            <span className="text-51 inline-block font-extrabold text-darkenBlack roboto tracking-widest leading-05">
              <img src={font} alt="" />
            </span>
            <p className="text-xl font-medium w-2/5 text-darkenBlack">
              Одежда от известные брендов у нас в каталоге. Только качественные
              вещи.
            </p>
            <Link className="py-6 px-7 bg-darkenBlack text-white text-xs font-extrabold rounded-lg flex items-center justify-center gap-x-5 w-1/4">
              Перейти в каталог <img src={arrowWhite} alt="" />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

      <ul className="grid grid-cols-3 gap-32">
        {data.map((e) => {
          return e.map((product) => {
            if (product.size <= 36) {
              return (
                <li key={product.id} className="relative">
                  <img
                    src={product.img}
                    className="border-2 w-full border-transparent hover:border-textGray transition-all border-dashed"
                    alt={product.color + " " + product.type + " png"}
                  />
                  <button >
                    <img
                      src={star}
                      className="absolute object-fill top-5 right-5"
                      alt="star icon"
                    />
                  </button>
                  <h3 className="text-19 font-bold uppercase">
                    {product.name}
                  </h3>
                  <h4 className="text-17 font-medium text-textGray">
                    {product.price}₱
                  </h4>
                </li>
              );
            }
          });
        })}
      </ul>
    </div>
  );
};

export default Home;
