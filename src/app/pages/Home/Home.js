import React from "react";
import Categories from "../../components/Categories";
import Banner from "../../components/Banner";
import Products from "../../components/Products";
import OurServicesSection from "./OurServicesSection";
import WhyUsSection from "./WhyUsSection";
import Review from "./Review";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <Products />
      <OurServicesSection />
      <WhyUsSection />
      <Review />
    </div>
  );
};

export default Home;
