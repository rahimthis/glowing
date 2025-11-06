import { Link } from "react-router";

import { FaArrowRight } from "react-icons/fa";

import boxImage1 from "../../../assets/image-box-01.webp";
import boxImage2 from "../../../assets/image-box-02.webp";

const MoreToDiscover = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-semibold text-black">
            More to Discover
          </h2>
          <p className="text-gray-500 text-xl mt-2">
            Our bundles were designed to conveniently package your tanning{" "}
            <br /> essentials while saving you money.
          </p>
        </div>

        {/* Two-column layout */}

        <div className="grid md:grid-cols-2 gap-6">
          {/* 🧭 LEFT CARD */}
          <div className="relative overflow-hidden transition-all duration-500">
            {/* 🖼️ IMAGE CONTAINER (Fixed height + overflow hidden) */}
            <div className="overflow-hidden h-80 w-full">
              {/* ✨ Hover Scale Effect */}
              <img
                src={boxImage1}
                alt="New Arrivals"
                className="
                  w-full h-full object-cover 
                  transform transition-transform duration-700 ease-out 
                  hover:scale-110     /* ✨ Zooms in smoothly on hover */
                "
              />
            </div>

            {/* 📝 TEXT & BUTTON SECTION */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">New Arrivals</h3>
              <Link
                to="/products/trending"
                className="
                    inline-flex items-center gap-2
                    transition-all duration-300
                    group                "
              >
                Explore
                {/* ✨ Arrow icon that moves on hover */}
                <FaArrowRight className="text-sm transform transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
              </Link>
            </div>
          </div>

          {/* 🧭 RIGHT CARD */}
          <div className="relative overflow-hidden transition-all duration-500">
            {/* 🖼️ IMAGE CONTAINER (Fixed height + overflow hidden) */}
            <div className="overflow-hidden h-80 w-full">
              {/* ✨ Hover Scale Effect */}
              <img
                src={boxImage2}
                alt="Trending Now"
                className="
                  w-full h-full object-cover 
                  transform transition-transform duration-700 ease-out 
                  hover:scale-110     /* ✨ Zooms in smoothly on hover */
                "
              />
            </div>

            {/* 📝 TEXT & BUTTON SECTION */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Trending Now</h3>
              <Link
                to="/products/trending"
                className="
    inline-flex items-center gap-2
    transition-all duration-300
    group
  "
              >
                Explore
                {/* ✨ Arrow icon that moves on hover */}
                <FaArrowRight className="text-sm transform transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreToDiscover;
