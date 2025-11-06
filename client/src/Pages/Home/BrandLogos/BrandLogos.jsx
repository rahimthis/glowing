import React from "react";

import Logo1 from "../../../assets/logos/featured-box-01.png"
import Logo2 from "../../../assets/logos/featured-box-02.png"
import Logo3 from "../../../assets/logos/featured-box-03.png"


const BrandLogos = () => {
  const brands = [
    {
      id: 1,
      logo: Logo1,
      text: "Featured on Amazon Business News",
    },
    {
      id: 2,
      logo: Logo2,
      text: "Highlighted by Google Developer Community",
    },
    {
      id: 3,
      logo:Logo3,
      text: "Covered in The New York Times Tech Section",
    },
  ];

  return (
    <section className="py-16 bg-[#EDF1F0] mb-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Section title */}
        <h2 className="text-5xl font-bold mb-10 text-black">As Seen In</h2>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex flex-col items-center justify-center "
            >
              <img
                src={brand.logo}
                alt={brand.text}
                className="w-32 object-contain mb-4"
              />
              <p className=" text-xl">{brand.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
