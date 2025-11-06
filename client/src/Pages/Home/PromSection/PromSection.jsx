import React from "react";

export default function PromoSection() {
  return (
    <section className="max-w-7xl mb-10 mx-auto px-6  grid md:grid-cols-2 gap-6">
      {/* Left Card */}
      <div className="relative overflow-hidden group min-h-[420px]">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
          style={{
            backgroundImage: "url('https://i.ibb.co.com/fYZmZ10Q/banner-01.webp')",
          }}
        ></div>
        <div className="relative z-10 p-10 max-w-sm flex flex-col  h-full">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            New Collection
          </p>
          <h2 className="text-3xl font-bold mt-2 mb-4 text-black">
            Intensive Glow C+ Serum
          </h2>
          <button className="bg-black w-2/4 text-white px-5 py-2 rounded-md hover:bg-gray-800 transition">
            Explore More
          </button>
        </div>
      </div>

      {/* Right Card */}
      <div className="relative overflow-hidden group min-h-[420px]">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
          style={{
            backgroundImage: "url('https://i.ibb.co.com/hJdJ7998/banner-02.webp')",
          }}
        ></div>
        <div className="relative z-10 p-10 max-w-sm flex flex-col  h-full">
          <h2 className="text-3xl font-bold mb-3 text-black">
            25% off Everything
          </h2>
          <p className="text-gray-500 mb-5">
            Makeup with extended range in colors for every human.
          </p>
          <button className="bg-black w-2/4 text-white px-5 py-2 rounded-md hover:bg-gray-800 transition">
            Shop Sale
          </button>
        </div>
      </div>
    </section>
  );
}
