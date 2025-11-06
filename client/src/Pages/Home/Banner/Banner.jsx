import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

// import bg images

import image1 from "../../../assets/hero-slider-01.webp";
import image2 from "../../../assets/hero-slider-02.webp";
import image3 from "../../../assets/hero-slider-03.webp";

const slides = [
  {
    _id: 1,
    shortTitle: "essential items",
    titile: "Beauty Inspired by Real Life ",
    text: "Made using clean, non toxic ingredients, our prodcuts are design for everyone.",
    imge: image1,
    url: "http://localhost:5173/Shope",
  },
  {
    _id: 2,
    shortTitle: "get the gelow",
    titile: "Be Your kind of Beauty",
    text: "Made using clean, non toxic ingredients, our prodcuts are design for everyone.",
    imge: image2,
    url: "http://localhost:5173/Shope",
  },
  {
    _id: 3,
    shortTitle: "new collection",
    titile: "Get the Perfectly Hydrated Skin ",
    text: "Made using clean, non toxic ingredients, our prodcuts are design for everyone.",
    imge: image3,
    url: "http://localhost:5173/Shope",
  },
];

const Banner = () => {
  return (
    <div className=" w-full h-[90vh]">
      <Swiper
        modules={[Pagination, Navigation]}
        navigation={true}
        pagination={{ clickable: true }}
        grabCursor={true}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-full"
      >
        {slides.map(({ imge, shortTitle, titile, text, url, _id }) => (
          <SwiperSlide key={_id}>
            <div
              className="h-full bg-cover bg-center  overflow-hidden flex items-center "
              style={{
                backgroundImage: `url(${imge})`,
              }}
            >
              <div className=" p-10 md:p-20 max-w-xl">
                <p className="text-gray-500 uppercase mb-3">{shortTitle}</p>
                <h2 className="text-5xl md:text-5xl font-bold mb-4 text-black">
                  {titile}
                </h2>
                <p className=" text-gray-500 text-lg md:text-xl">{text}</p>
                {/* <a
                  href={url}
                  target="_blank"
                  className="inline-block bg-gradient-to-r from-indigo-500 to-blue-600 text-white mt-5 font-semibold px-6 py-3 rounded-lg shadow-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300"
                >
                  Shop Now
                </a> */}
                <a href={url} target="_blank" className="bg-black w-2/6 text-white inline-block mt-3  px-5 py-3 rounded-md hover:bg-gray-800 transition">
                  Explore More
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <div
            className="h-full bg-cover bg-center  overflow-hidden flex items-center "
            style={{
              backgroundImage: `url(${image1})`,
            }}
          >
            <div className=" p-10 md:p-20 max-w-lg">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                this is fast
              </h2>
              <p className="text-lg md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda placeat deserunt vel distinctio blanditiis ipsa illo, quae earum, suscipit sit modi. Magni perferendis cumque eos aspernatur voluptates minus quasi sed.</p>
              <button>
                Coll to Acttion
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center  overflow-hidden flex items-center"
            style={{
              backgroundImage: `url(${image2})`,
            }}
          >
            <div className=" p-10 md:p-20 max-w-lg">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                this is Secand
              </h2>
              <p className="text-lg md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda placeat deserunt vel distinctio blanditiis ipsa illo, quae earum, suscipit sit modi. Magni perferendis cumque eos aspernatur voluptates minus quasi sed.</p>
              <button>
                Coll to Acttion
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center  overflow-hidden flex items-center"
            style={{
              backgroundImage: `url(${image3})`,
            }}
          >
            <div className=" p-10 md:p-20 max-w-lg">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                this is Third
              </h2>
              <p className="text-lg md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda placeat deserunt vel distinctio blanditiis ipsa illo, quae earum, suscipit sit modi. Magni perferendis cumque eos aspernatur voluptates minus quasi sed.</p>
              <button>
                Coll to Acttion
              </button>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Banner;
