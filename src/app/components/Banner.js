import React from "react";
import Carousel from "./Carousel";

const Banner = () => {
  return (
    <div className="container mt-0 mb-24 px-6 mx-auto">
      <section className="mb-32 text-gray-800 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-6 xl:gap-4 items-center">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight">
              Assign a Handyman <br />
              <span className="text-primary">at work to Fix the Household</span>
            </h2>
            <button className="mt-8 btn btn-primary w-40 rounded-3xl text-black">
              Discover it
            </button>
          </div>
          <Carousel />
          {/* <div className="mb-6 lg:mb-0">
          
          </div> */}
        </div>
      </section>
    </div>
    // <div className="container mx-auto py-9 md:py-12 px-4 md:px-6">
    //   <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
    //     <div className="flex flex-col md:flex-row items-strech justify-between bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
    //       <div className="flex flex-col justify-center md:w-1/2">
    //         <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">
    //           Best Deal
    //         </h1>
    //         <p className="text-base lg:text-xl text-gray-800 dark:text-white mt-2">
    //           Save upto <span className="font-bold">50%</span>
    //         </p>
    //       </div>
    //       <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
    //         <img
    //           src="https://i.ibb.co/J2BtZdg/Rectangle-56-1.png"
    //           alt=""
    //           className=""
    //         />
    //       </div>
    //     </div>
    //     <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-50 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
    //       <Carousel />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Banner;
