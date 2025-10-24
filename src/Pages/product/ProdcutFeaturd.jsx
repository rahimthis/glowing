import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Heart, Eye, SlidersHorizontal } from "lucide-react";

// 💄 Cosmetic product data
const products = [
  {
    id: 1,
    name: "Hydrating Face Serum",
    price: "$45",
    img1: "/images/serum1a.jpg",
    img2: "/images/serum1b.jpg",
    url: "https://yourstore.com/products/hydrating-serum",
  },
  {
    id: 2,
    name: "Matte Lipstick Set",
    price: "$29",
    img1: "/images/lipstick1a.jpg",
    img2: "/images/lipstick1b.jpg",
    url: "https://yourstore.com/products/matte-lipstick",
  },
  {
    id: 3,
    name: "Glow Highlighter Palette",
    price: "$35",
    img1: "/images/highlighter1a.jpg",
    img2: "/images/highlighter1b.jpg",
    url: "https://yourstore.com/products/highlighter-palette",
  },
  {
    id: 4,
    name: "Moisturizing Face Cream",
    price: "$50",
    img1: "/images/cream1a.jpg",
    img2: "/images/cream1b.jpg",
    url: "https://yourstore.com/products/face-cream",
  },
  {
    id: 5,
    name: "Natural Eyebrow Pencil",
    price: "$18",
    img1: "/images/eyebrow1a.jpg",
    img2: "/images/eyebrow1b.jpg",
    url: "https://yourstore.com/products/eyebrow-pencil",
  },
  {
    id: 6,
    name: "Long Lash Mascara",
    price: "$22",
    img1: "/images/mascara1a.jpg",
    img2: "/images/mascara1b.jpg",
    url: "https://yourstore.com/products/mascara",
  },
  {
    id: 7,
    name: "Nude Eyeshadow Palette",
    price: "$38",
    img1: "/images/eyeshadow1a.jpg",
    img2: "/images/eyeshadow1b.jpg",
    url: "https://yourstore.com/products/eyeshadow-palette",
  },
  {
    id: 8,
    name: "Rose Glow Blush",
    price: "$27",
    img1: "/images/blush1a.jpg",
    img2: "/images/blush1b.jpg",
    url: "https://yourstore.com/products/blush",
  },
];

const ProdcutFeatured = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-10 text-center">
           Featured Cosmetics
        </h2>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={4}
          spaceBetween={24}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          grabCursor={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="!pb-10"
        >
          {products.map((p) => (
            <SwiperSlide key={p.id}>
              <div className="group bg-white shadow-md rounded-2xl overflow-hidden relative transition-all duration-300 hover:shadow-lg">
                {/* 🖼️ Product Image */}
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                    src={p.img1}
                    alt={p.name}
                    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img
                    src={p.img2}
                    alt={p.name}
                    className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>

                {/* 🎬 Hover Icons */}
                <div className="absolute bottom-[-60px] left-0 w-full flex justify-center gap-3 opacity-0 group-hover:opacity-100 group-hover:bottom-4 transition-all duration-500">
                  <button className="bg-white p-3 rounded-full shadow hover:bg-pink-500 hover:text-white transition-all duration-300">
                    <SlidersHorizontal size={20} title="Select Options" />
                  </button>
                  <button className="bg-white p-3 rounded-full shadow hover:bg-pink-500 hover:text-white transition-all duration-300">
                    <Eye size={20} title="Quick View" />
                  </button>
                  <button className="bg-white p-3 rounded-full shadow hover:bg-pink-500 hover:text-white transition-all duration-300">
                    <Heart size={20} title="Add to Wishlist" />
                  </button>
                </div>

                {/* 🏷️ Product Info */}
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {p.name}
                  </h3>
                  <p className="text-pink-600 font-bold mt-1">{p.price}</p>
                  
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProdcutFeatured;
