import React from "react";
import Categories from "../../components/Categories";
import Banner from "../../components/Banner";
import Products from "../../components/Products";
import OurServicesSection from "../../components/OurServicesSection";
import WhyUsSection from "../../components/WhyUsSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <Products />
      <OurServicesSection />
      <WhyUsSection />
    </div>
  );
};

export default Home;
