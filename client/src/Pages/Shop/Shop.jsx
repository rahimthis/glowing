import React from "react";

// icon import form lucide react
import { Eye, Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router";

const products = [
  {
    id: 1,
    name: "Hydrating Face Serum",
    price: "$45",
    img1: "https://i.ibb.co.com/fdSJtwCm/product-01-1.jpg",
    img2: "https://i.ibb.co.com/XZNjH5wZ/product-01-2.jpg",
    url: "https://yourstore.com/products/hydrating-face-serum",
  },
  {
    id: 2,
    name: "Matte Lipstick Set",
    price: "$29",
    img1: "https://i.ibb.co.com/SXjzDcmp/product-02-1.png",
    img2: "https://i.ibb.co.com/XT9V134/product-02-2.png",
    url: "https://yourstore.com/products/matte-lipstick-set",
  },
  {
    id: 3,
    name: "Glow Highlighter Palette",
    price: "$35",
    img1: "https://i.ibb.co.com/0y13FzkP/product-03-1.jpg",
    img2: "https://i.ibb.co.com/G40TXxQF/product-03-3.jpg",
    url: "https://yourstore.com/products/glow-highlighter-palette",
  },
  {
    id: 4,
    name: "Moisturizing Face Cream",
    price: "$50",
    img1: "https://i.ibb.co.com/fzV91PRY/product-04-1.png",
    img2: "https://i.ibb.co.com/My2n1LYz/product-04-3.png",
    url: "https://yourstore.com/products/moisturizing-face-cream",
  },
  {
    id: 5,
    name: "Natural Eyebrow Pencil",
    price: "$18",
    img1: "https://i.ibb.co.com/3GvCMBM/product-05-1.jpg",
    img2: "https://i.ibb.co.com/m5ZrNGzS/product-05-2.jpg",
    url: "https://yourstore.com/products/natural-eyebrow-pencil",
  },
  {
    id: 6,
    name: "Long Lash Mascara",
    price: "$22",
    img1: "https://i.ibb.co.com/5Wtych1p/product-06-1.jpg",
    img2: "https://i.ibb.co.com/Rpf1cZ5R/product-06-2.jpg",
    url: "https://yourstore.com/products/long-lash-mascara",
  },
  {
    id: 7,
    name: "Velvet Compact Powder",
    price: "$40",
    img1: "https://i.ibb.co.com/ym9gtYy6/product-07-1.png",
    img2: "https://i.ibb.co.com/FqXDggwG/product-07-2.png",
    url: "https://yourstore.com/products/velvet-compact-powder",
  },
  {
    id: 8,
    name: "Refreshing Toner Mist",
    price: "$28",
    img1: "https://i.ibb.co.com/SCRmGk5/product-08-1.png",
    img2: "https://i.ibb.co.com/zh6dzm3g/product-08-2.png",
    url: "https://yourstore.com/products/refreshing-toner-mist",
  },
  {
    id: 9,
    name: "Soothing Makeup Remover",
    price: "$32",
    img1: "https://i.ibb.co.com/Z6JvLRVM/product-09-1.png",
    img2: "https://i.ibb.co.com/hJB3JNkZ/product-09-2.png",
    url: "https://yourstore.com/products/soothing-makeup-remover",
  },
  {
    id: 10,
    name: "Rejuvenating Night Cream",
    price: "$55",
    img1: "https://i.ibb.co.com/VpxP1z33/product-11-1.jpg",
    img2: "https://i.ibb.co.com/GfbJbhvy/product-11-2.jpg",
    url: "https://yourstore.com/products/rejuvenating-night-cream",
  },
  {
    id: 11,
    name: "Vitamin C Brightening Serum",
    price: "$48",
    img1: "https://i.ibb.co.com/3mM16CSY/product-12-1.jpg",
    img2: "https://i.ibb.co.com/1fNYXJH5/product-12-4.jpg",
    url: "https://yourstore.com/products/vitamin-c-brightening-serum",
  },
  {
    id: 12,
    name: "Luxury Lip Gloss",
    price: "$25",
    img1: "https://i.ibb.co.com/r2RkgkXZ/product-13-1.png",
    img2: "https://i.ibb.co.com/Q3Vw1Lhc/product-13-3.png",
    url: "https://yourstore.com/products/luxury-lip-gloss",
  },
  {
    id: 13,
    name: "Gentle Foam Cleanser",
    price: "$30",
    img1: "https://i.ibb.co.com/r2WYbxWt/product-14-1.png",
    img2: "https://i.ibb.co.com/TqqW1cTB/product-14-2.png",
    url: "https://yourstore.com/products/gentle-foam-cleanser",
  },
  {
    id: 14,
    name: "Rose Blush Compact",
    price: "$27",
    img1: "https://i.ibb.co.com/qLzgTsg5/product-15-1.png",
    img2: "https://i.ibb.co.com/G4LnkwDk/product-15-2.png",
    url: "https://yourstore.com/products/rose-blush-compact",
  },
  {
    id: 15,
    name: "Aloe Vera Gel Moisturizer",
    price: "$33",
    img1: "https://i.ibb.co.com/60dhQ0b9/product-16-1.png",
    img2: "https://i.ibb.co.com/VWX7pjXC/product-16-2.png",
    url: "https://yourstore.com/products/aloe-vera-gel-moisturizer",
  },
];

const Shop = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto py-10 ">
        <div>
          <h1 className="text-5xl font-bold text-center mb-20">Product</h1>
        </div>
        <div className="col-span-1 lg:col-span-4 ">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Link to={``} className="group relative bg-white rounded-xl  overflow-hidden cursor-pointer">
                {/* Image wrapper */}
                <div className="relative w-full ">
                  {/* Default image */}
                  <img
                    src={product.img1}
                    alt={product.name}
                    className="w-fit object-contain transition-opacity duration-500 group-hover:opacity-0"
                  />
                  {/* Hover image */}
                  <img
                    src={product.img2}
                    alt={product.name}
                    className="absolute top-0 left-0 w-fit object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100"
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
