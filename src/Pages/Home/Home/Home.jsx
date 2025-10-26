import React from "react";
import Banner from "../Banner/Banner";
import ProdcutFeatured from "../../product/ProdcutFeaturd";
import SlideProduct from "../../product/SlideProduct";
import PromoSection from "../PromSection/PromSection";
import FeaturesSection from "../FeaturesSection/FeaturesSection";

const Home = () => {
  return (
    <>
      <Banner />
      {/* <ProdcutFeatured /> */}
      <SlideProduct />
      <PromoSection />
      <FeaturesSection />
    </>
  );
};

export default Home;
