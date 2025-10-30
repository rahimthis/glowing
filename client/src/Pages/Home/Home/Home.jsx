import React from "react";
import Banner from "../Banner/Banner";
import ProdcutFeatured from "../../product/ProdcutFeaturd";
import SlideProduct from "../../product/SlideProduct";
import PromoSection from "../PromSection/PromSection";
import FeaturesSection from "../FeaturesSection/FeaturesSection";
import BrandLogos from "../BrandLogos/BrandLogos";
import ProductShowCase from "../ProductShowCase/ProductShowCase";
import MoreToDiscover from "../MoreToDiscover/MoreToDiscover";

const Home = () => {
  return (
    <>
      <Banner />
      {/* <ProdcutFeatured /> */}
      <SlideProduct />
      <PromoSection />
      <FeaturesSection />
      <BrandLogos />
      <ProductShowCase />
      <MoreToDiscover />
    </>
  );
};

export default Home;
