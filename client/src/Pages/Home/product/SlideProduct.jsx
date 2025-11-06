import React from "react";
import Slider from "react-slick";

// icon import form lucide react
import { Eye, Heart, ShoppingBag } from "lucide-react";

// 💄 Cosmetic product data
const products = [
  {
    id: 1,
    name: "Hydrating Face Serum",
    price: "$45",
    img1: "https://i.ibb.co.com/fdSJtwCm/product-01-1.jpg",
    img2: "https://i.ibb.co.com/XZNjH5wZ/product-01-2.jpg",
    url: "https://yourstore.com/products/hydrating-serum",
  },
  {
    id: 2,
    name: "Matte Lipstick Set",
    price: "$29",
    img1: "https://i.ibb.co.com/SXjzDcmp/product-02-1.png",
    img2: "https://i.ibb.co.com/XT9V134/product-02-2.png",
    url: "https://yourstore.com/products/matte-lipstick",
  },
  {
    id: 3,
    name: "Glow Highlighter Palette",
    price: "$35",
    img1: "https://i.ibb.co.com/G40TXxQF/product-03-3.jpg",
    img2: "https://i.ibb.co.com/0y13FzkP/product-03-1.jpg",
    url: "https://yourstore.com/products/highlighter-palette",
  },
  {
    id: 4,
    name: "Moisturizing Face Cream",
    price: "$50",
    img1: "https://i.ibb.co.com/fzV91PRY/product-04-1.png",
    img2: "https://i.ibb.co.com/My2n1LYz/product-04-3.png",
    url: "https://yourstore.com/products/face-cream",
  },
  {
    id: 5,
    name: "Natural Eyebrow Pencil",
    price: "$18",
    img1: "https://i.ibb.co.com/3GvCMBM/product-05-1.jpg",
    img2: "https://i.ibb.co.com/m5ZrNGzS/product-05-2.jpg",
    url: "https://yourstore.com/products/eyebrow-pencil",
  },
  {
    id: 6,
    name: "Long Lash Mascara",
    price: "$22",
    img1: "https://i.ibb.co.com/5Wtych1p/product-06-1.jpg",
    img2: "https://i.ibb.co.com/Rpf1cZ5R/product-06-2.jpg",
    url: "https://yourstore.com/products/mascara",
  },
  {
    id: 7,
    name: "Nude Eyeshadow Palette",
    price: "$38",
    img1: "https://i.ibb.co.com/ym9gtYy6/product-07-1.png",
    img2: "https://i.ibb.co.com/FqXDggwG/product-07-2.png",
    url: "https://yourstore.com/products/eyeshadow-palette",
  },
  {
    id: 8,
    name: "Rose Glow Blush",
    price: "$27",
    img1: "https://i.ibb.co.com/SCRmGk5/product-08-1.png",
    img2: "https://i.ibb.co.com/zh6dzm3g/product-08-2.png",
    url: "https://yourstore.com/products/blush",
  },
];

export default function SlideProduct() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-white py-16  ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-5xl font-semibold text-center text-black ">
            Our Featured Products
          </h2>
          <p className="font-semibold text-center mt-2  text-gray-500">
            Get the skin you want to feel
          </p>
        </div>
        <Slider {...settings}>
          {products.map((product) => (
            <div className="group relative bg-white rounded-xl  overflow-hidden cursor-pointer">
              {/* Image wrapper */}
              <div className="relative w-full h-80">
                {/* Default image */}
                <img
                  src={product.img1}
                  alt={product.name}
                  className="w-full h-full object-contain transition-opacity duration-500 group-hover:opacity-0"
                />
                {/* Hover image */}
                <img
                  src={product.img2}
                  alt={product.name}
                  className="absolute top-0 left-0 w-full h-full object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Icons (hidden until hover) */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <button className="bg-white p-2 rounded-full shadow hover:scale-110 transition">
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow hover:scale-110 transition">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow hover:scale-110 transition">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Product info */}
              <div className="py-4 text-center">
                <p className="text-gray-800 font-medium">{product.price}</p>
                <h3 className="text-gray-600 text-sm mt-1">{product.name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
