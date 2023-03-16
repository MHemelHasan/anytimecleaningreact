import React from "react";
import Categories from "../../components/Categories";
import Banner from "../../components/Banner";
import Products from "../../components/Products";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
