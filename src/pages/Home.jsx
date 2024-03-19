import React from "react";
import { Link, Navigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// imgs
import arrowRight from "../assets/arrow.svg";
import arrowLeft from "../assets/arrowLeft.svg";
const Home = ({ cart, setCart, PrductData, setProductData }) => {
  const hadleBuy = (e) => {
    PrductData.map((r) => {
      return r.map((b) => {
        if (b.id === e) {
          b.isCart = true;
        }
      });
    });
  };

  return (
    <div className="containerb">
      <Swiper
        spaceBetween={100}
        pagination={true}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="heroSlide my-20"
      >
        <SwiperSlide className="heroSlide flex flex-col items-start justify-start gap-y-5 pt-20 p-10">
          <p className="text-51 uppercase roboto w-1/3">
            Широкий ассортимент Одежды
          </p>
          <p className="text-19 roboto w-5/12 ">
            Одежда от известные брендов у нас в каталоге. Только качественные
            вещи.
          </p>
          <Link className="py-5 px-7 bg-darkenBlack text-white flex items-center justify-center gap-x-4 w-1/5 rounded-md text-xs roboto uppercase">
            Перейти в каталог <img src={arrowRight} alt="arrowRight" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="heroSlide flex flex-col items-start justify-start gap-y-5 pt-20 p-10">
          <p className="text-51 uppercase roboto w-1/3">
            Широкий ассортимент Одежды
          </p>
          <p className="text-19 roboto w-5/12 ">
            Одежда от известные брендов у нас в каталоге. Только качественные
            вещи.
          </p>
          <Link className="py-5 px-7 bg-darkenBlack text-white flex items-center justify-center gap-x-4 w-1/5 rounded-md text-xs roboto uppercase">
            Перейти в каталог <img src={arrowRight} alt="arrowRight" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="heroSlide flex flex-col items-start justify-start gap-y-5 pt-20 p-10">
          <p className="text-51 uppercase roboto w-1/3">
            Широкий ассортимент Одежды
          </p>
          <p className="text-19 roboto w-5/12 ">
            Одежда от известные брендов у нас в каталоге. Только качественные
            вещи.
          </p>
          <Link className="py-5 px-7 bg-darkenBlack text-white flex items-center justify-center gap-x-4 w-1/5 rounded-md text-xs roboto uppercase">
            Перейти в каталог <img src={arrowRight} alt="arrowRight" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="heroSlide flex flex-col items-start justify-start gap-y-5 pt-20 p-10">
          <p className="text-51 uppercase roboto w-1/3">
            Широкий ассортимент Одежды
          </p>
          <p className="text-19 roboto w-5/12 ">
            Одежда от известные брендов у нас в каталоге. Только качественные
            вещи.
          </p>
          <Link className="py-5 px-7 bg-darkenBlack text-white flex items-center justify-center gap-x-4 w-1/5 rounded-md text-xs roboto uppercase">
            Перейти в каталог <img src={arrowRight} alt="arrowRight" />
          </Link>
        </SwiperSlide>
      </Swiper>
      <div className="w-full flex items-center justify-between">
        <h2>Обувь</h2>
        <Link className="border-b-2 border-darkenBlack uppercase text-sm roboto">больше товаров <img src={arrowLeft} alt="" /></Link>
      </div>
      <Swiper
        spaceBetween={50}
        pagination={true}
        slidesPerView={4}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="catalogSlide my-20"
      >
        {PrductData.map((e, index) => {
          return e.map((product) => {
            if (product.size == 36) {
              return (
                <SwiperSlide key={index}>
                  <Link
                    to={`/product/${index}`}
                    className="w-full flex flex-col items-start justify-center"
                  >
                    <img
                      src={product.img}
                      className="w-full h-72 mb-5 object-cover object-center border-2 border-transparent border-dashed hover:border-darkenBlack rounded-xl transition-all"
                      alt={product.name + " png icon"}
                    />
                    <div className="h-20 flex flex-col justify-between">
                      {" "}
                      <h3 className="text-19 roboto">{product.name}</h3>
                      <h4 className="uppercase roboto text-textGray">
                        to {product.price}₽
                      </h4>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            }
          });
        })}
      </Swiper>
    </div>
  );
};

export default Home;
