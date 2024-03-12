import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, History } from "swiper/modules";
import arrowWhite from "../assets/arrow.svg";
import font from "../assets/Font.svg";
import heroSlideImg from "../assets/HeroSlideImg.jpeg";
import star from "../assets/star.svg";
import starClick from "../assets/star copy.svg";
import { Link } from "react-router-dom";

const Home = ({ data, }) => {
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

  return (
    <div className="containerb">
      <div className="flex py-12 items-center justify-center">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          pagination={true}
          autoplay
          onAutoplayTimeLeft={200}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="hero bg-cover rounded-xl overflow-hidden p-20 flex flex-col items-start justify-center gap-y-5">
            <h1 className="font-bold leading-none text-51 roboto w-1/2 ">
              Широкий Aссортимент Одежды
            </h1>

            <p className="text-xl font-medium w-2/5 text-darkenBlack roboto">
              Одежда от известные брендов у нас в каталоге. Только качественные
              вещи.
            </p>
            <Link className="roboto py-6 px-7 bg-darkenBlack text-white text-xs font-extrabold rounded-lg flex items-center justify-center gap-x-5 w-1/4">
              Перейти в каталог <img src={arrowWhite} alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="hero bg-cover rounded-xl overflow-hidden p-20 flex flex-col items-start justify-center gap-y-5">
            <h1 className="font-bold leading-none text-51 roboto w-1/2 ">
              Широкий Aссортимент Одежды
            </h1>

            <p className="text-xl font-medium w-2/5 text-darkenBlack roboto">
              Одежда от известные брендов у нас в каталоге. Только качественные
              вещи.
            </p>
            <Link className="roboto py-6 px-7 bg-darkenBlack text-white text-xs font-extrabold rounded-lg flex items-center justify-center gap-x-5 w-1/4">
              Перейти в каталог <img src={arrowWhite} alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="hero bg-cover rounded-xl overflow-hidden p-20 flex flex-col items-start justify-center gap-y-5">
            <h1 className="font-bold leading-none text-51 roboto w-1/2 ">
              Широкий Aссортимент Одежды
            </h1>

            <p className="text-xl font-medium w-2/5 text-darkenBlack roboto">
              Одежда от известные брендов у нас в каталоге. Только качественные
              вещи.
            </p>
            <Link className="roboto py-6 px-7 bg-darkenBlack text-white text-xs font-extrabold rounded-lg flex items-center justify-center gap-x-5 w-1/4">
              Перейти в каталог <img src={arrowWhite} alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="hero bg-cover rounded-xl overflow-hidden p-20 flex flex-col items-start justify-center gap-y-5">
            <h1 className="font-bold leading-none text-51 roboto w-1/2 ">
              Широкий Aссортимент Одежды
            </h1>

            <p className="text-xl font-medium w-2/5 text-darkenBlack roboto">
              Одежда от известные брендов у нас в каталоге. Только качественные
              вещи.
            </p>
            <Link className="roboto py-6 px-7 bg-darkenBlack text-white text-xs font-extrabold rounded-lg flex items-center justify-center gap-x-5 w-1/4">
              Перейти в каталог <img src={arrowWhite} alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="hero bg-cover rounded-xl overflow-hidden p-20 flex flex-col items-start justify-center gap-y-5">
            <h1 className="font-bold leading-none text-51 roboto w-1/2 ">
              Широкий Aссортимент Одежды
            </h1>

            <p className="text-xl font-medium w-2/5 text-darkenBlack roboto">
              Одежда от известные брендов у нас в каталоге. Только качественные
              вещи.
            </p>
            <Link className="roboto py-6 px-7 bg-darkenBlack text-white text-xs font-extrabold rounded-lg flex items-center justify-center gap-x-5 w-1/4">
              Перейти в каталог <img src={arrowWhite} alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="hero bg-cover rounded-xl overflow-hidden p-20 flex flex-col items-start justify-center gap-y-5">
            <h1 className="font-bold leading-none text-51 roboto w-1/2 ">
              Широкий Aссортимент Одежды
            </h1>

            <p className="text-xl font-medium w-2/5 text-darkenBlack roboto">
              Одежда от известные брендов у нас в каталоге. Только качественные
              вещи.
            </p>
            <Link className="roboto py-6 px-7 bg-darkenBlack text-white text-xs font-extrabold rounded-lg flex items-center justify-center gap-x-5 w-1/4">
              Перейти в каталог <img src={arrowWhite} alt="" />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

      <h2 className="text-5xl font-bold mb-20 roboto">Shoes</h2>
      <ul className="grid grid-cols-4 gap-10">
        {data.map((e, index) => {
          return e.map((product) => {
            if (product.size <= 36 && product.color.includes("") && index < 4) {
              return (
                <li
                  key={index}
                  id={index}
                  className="relative rounded-lg flex flex-col items-center justify-between"
                >
                  <button
                    className="absolute top-5 right-5"
                    onClick={() => clickLike(product.id)}
                  >
                    {!product.isLike && (
                      <img src={star} width={20} height={20} alt="star icon" />
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
                  <Link to={`/product/${index}`}>
                    <img
                      src={product.img}
                      className="border-2 rounded-lg w-full border-transparent hover:border-textGray transition-all border-dashed"
                      alt={product.color + " " + product.type + " png"}
                    />
                    <div className="p-5 flex flex-col items-start justify-between h-32">
                      <h3 className="text-19 font-bold uppercase roboto">
                        {product.name}
                      </h3>
                      <h4 className="text-17 font-medium text-textGray roboto">
                        to {product.price}₱
                      </h4>
                    </div>
                  </Link>
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
