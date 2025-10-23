import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import style swiper
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// import bg images

import image1 from "../../../assets/hero-slider-01.webp";
import image2 from "../../../assets/hero-slider-02.webp";
import image3 from "../../../assets/hero-slider-03.webp";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" bg-[url('')]">
            this is slid one
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=""></div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=""></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
