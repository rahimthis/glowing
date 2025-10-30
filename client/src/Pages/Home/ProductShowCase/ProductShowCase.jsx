import React from "react"

// icon import form lucide react 
import { Eye, Heart, ShoppingBag } from "lucide-react";

import model1 from '../../../assets/banner-21.webp'

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
   
];

const ProductShowCase = () => {
    return (
        <section className="py-20 bg-white ">
            <div className="max-w-7xl mx-auto px-4 ">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-semibold text-gray-800">
                        Customer favorite beauty essentials
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Made using clean, non-toxic ingredients, our products are designed for everyone.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 h-[70vh]">

                    {/* Left side hero */}
                    <div className="relative col-span-1 lg:col-span-2 group overflow-hidden rounded-2xl">
                        {/* Image with zoom on hover */}
                        <img
                            src={model1}
                            alt="Empower Yourself"
                            className="w-full  object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />

                        {/* Moving light overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine"></div>

                        {/* Text content */}
                        <div className="absolute bottom-10 left-10 text-white">
                            <h2 className="text-2xl font-semibold mb-2">Empower Yourself</h2>
                            <p className="text-sm mb-4">Get the skin you want to feel</p>
                            <button className="bg-white text-gray-900 font-medium py-2 px-4 rounded hover:bg-gray-100">
                                Explore More
                            </button>
                        </div>
                    </div>

                    {/* Right side product grid */}
                    <div className="col-span-1 lg:col-span-2">


                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductShowCase;
