import React from "react";
import logo from "../../../assets/company-logo.png";
const PrideSection = () => {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div
        className="h-60 mb-10 md:mb-0 bg-cover lg:h-auto lg:w-48 flex-none text-center overflow-hidden"
        // style={{ backgroundImage: "url('/img/card-left.jpg')" }}
        title="Woman holding a mug"
      >
        <img src={logo} alt="logo" />
      </div>
      <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl md:text-2xl lg:text-4xl mb-10">
            Our work is exterior cleaning, but our mission is creating
            extraordinary experiences.
          </div>
          <p className="text-primary text-xl md:text-2xl lg:text-4xl">
            When you spot the tartan, you know your home will be held to the
            highest standard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrideSection;
