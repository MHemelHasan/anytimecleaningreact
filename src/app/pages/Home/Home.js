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
      <PrideSection />
      <Categories />
      <Products />
      <OurServicesSection />
      <RecommendedService />
      <Provider />
      <WhyUsSection />
      <Review />
    </div>
  );
};

export default Home;
