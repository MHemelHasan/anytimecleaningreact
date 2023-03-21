import React from "react";
import Categories from "../../components/Categories";
import Banner from "../../components/Banner";
import Products from "../../components/Products";
import OurServicesSection from "./OurServicesSection";
import WhyUsSection from "./WhyUsSection";
import Review from "./Review";
import RecommendedService from "./RecommendedService";
import Provider from "./Provider";
import PrideSection from "./PrideSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <hr className="border-2" />
      <PrideSection />
      <hr className="border-2" />
      <Categories />
      <hr className="border-2" />
      <Products />
      <hr className="border-2" />
      <OurServicesSection />
      <hr className="border-2" />
      <RecommendedService />
      <Provider />
      <WhyUsSection />
      <Review />
    </div>
  );
};

export default Home;
