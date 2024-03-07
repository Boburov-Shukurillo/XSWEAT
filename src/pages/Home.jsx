import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, History } from "swiper/modules";
import arrowWhite from '../assets/arrow.svg'
import font from '../assets/Font.svg'
import heroSlideImg from "../assets/HeroSlideImg.jpeg";
import { Link } from "react-router-dom";
const Home = () => {
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
          <SwiperSlide className="bg-hero-pattern rounded-xl overflow-hidden p-20 flex flex-col items-start justify-center gap-y-5">
            <span className="text-51 inline-block font-extrabold text-darkenBlack roboto tracking-widest leading-05">
              <img src={font} alt="" />
            </span>
            <p className="text-xl font-medium w-2/5 text-darkenBlack">
              Одежда от известные брендов у нас в каталоге. Только качественные
              вещи.
            </p>
            <Link className="py-6 px-7 bg-darkenBlack text-white text-xs font-extrabold rounded-lg flex items-center justify-center gap-x-5 w-1/4">Перейти в каталог <img src={arrowWhite} alt="" /></Link>
          </SwiperSlide>
          <SwiperSlide className="bg-hero-patern2 rounded-xl overflow-hidden p-20 flex flex-col items-start justify-center gap-y-5">
            <span className="text-51 inline-block font-extrabold text-darkenBlack roboto tracking-widest leading-05">
              <img src={font} alt="" />
            </span>
            <p className="text-xl font-medium w-2/5 text-darkenBlack">
              Одежда от известные брендов у нас в каталоге. Только качественные
              вещи.
            </p>
            <Link className="py-6 px-7 bg-darkenBlack text-white text-xs font-extrabold rounded-lg flex items-center justify-center gap-x-5 w-1/4">Перейти в каталог <img src={arrowWhite} alt="" /></Link>
          </SwiperSlide>
          <SwiperSlide className="bg-hero-pattern rounded-xl overflow-hidden p-20 flex flex-col items-start justify-center gap-y-5">
            <span className="text-51 inline-block font-extrabold text-darkenBlack roboto tracking-widest leading-05">
              <img src={font} alt="" />
            </span>
            <p className="text-xl font-medium w-2/5 text-darkenBlack">
              Одежда от известные брендов у нас в каталоге. Только качественные
              вещи.
            </p>
            <Link className="py-6 px-7 bg-darkenBlack text-white text-xs font-extrabold rounded-lg flex items-center justify-center gap-x-5 w-1/4">Перейти в каталог <img src={arrowWhite} alt="" /></Link>
          </SwiperSlide>
          <SwiperSlide className="bg-hero-pattern rounded-xl overflow-hidden p-20 flex flex-col items-start justify-center gap-y-5">
            <span className="text-51 inline-block font-extrabold text-darkenBlack roboto tracking-widest leading-05">
              <img src={font} alt="" />
            </span>
            <p className="text-xl font-medium w-2/5 text-darkenBlack">
              Одежда от известные брендов у нас в каталоге. Только качественные
              вещи.
            </p>
            <Link className="py-6 px-7 bg-darkenBlack text-white text-xs font-extrabold rounded-lg flex items-center justify-center gap-x-5 w-1/4">Перейти в каталог <img src={arrowWhite} alt="" /></Link>
          </SwiperSlide>
          <SwiperSlide className="bg-hero-patern2 bg-contain rounded-xl overflow-hidden p-20 flex flex-col items-start justify-center gap-y-5">
            <span className="text-51 inline-block font-extrabold text-darkenBlack roboto tracking-widest leading-05">
              <img src={font} alt="" />
            </span>
            <p className="text-xl font-medium w-2/5 text-darkenBlack">
              Одежда от известные брендов у нас в каталоге. Только качественные
              вещи.
            </p>
            <Link className="py-6 px-7 bg-darkenBlack text-white text-xs font-extrabold rounded-lg flex items-center justify-center gap-x-5 w-1/4">Перейти в каталог <img src={arrowWhite} alt="" /></Link>
          </SwiperSlide>
          <SwiperSlide className="bg-hero-pattern rounded-xl overflow-hidden p-20 flex flex-col items-start justify-center gap-y-5">
            <span className="text-51 inline-block font-extrabold text-darkenBlack roboto tracking-widest leading-05">
              <img src={font} alt="" />
            </span>
            <p className="text-xl font-medium w-2/5 text-darkenBlack">
              Одежда от известные брендов у нас в каталоге. Только качественные
              вещи.
            </p>
            <Link className="py-6 px-7 bg-darkenBlack text-white text-xs font-extrabold rounded-lg flex items-center justify-center gap-x-5 w-1/4">Перейти в каталог <img src={arrowWhite} alt="" /></Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
