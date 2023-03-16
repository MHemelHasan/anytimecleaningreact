import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./carousel.css";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://media.istockphoto.com/id/1207505640/photo/hand-in-rubber-protective-glove-holding-white-spray-bottle-detergent-for-different-surfaces.jpg?b=1&s=170667a&w=0&k=20&c=CgiyJ963sdAIl5jhqKn6rbJuQBjSWxKL76NXM7rtduo=",
    "https://media.istockphoto.com/id/1433923860/photo/concept-of-cleaning-service-during-the-new-year-holidays.jpg?b=1&s=170667a&w=0&k=20&c=f3xfsyzCTlRk-vgACpkSC44kDsQaDy9mB7OZ2FX3tsQ=",
    "https://media.istockphoto.com/id/1415455001/photo/cleaner-clicks-on-the-virtual-screen-interface-on-the-icons-of-services.jpg?s=612x612&w=0&k=20&c=h2M1F54lm9Yac4HWPj7b43QOm02FaRIJP1TqYQiLzE0=",
  ];

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <div className="carousel-container mb-10 ">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <div
            className="carousel-slide h-screen bg-no-repeat bg-cover mb-10 relative"
            style={{ backgroundImage: `url(${images[0]})` }}
          >
            <div
              className="title text-black font-semibold text-base ml-12 md:text-3xl lg:text-5xl absolute mb-20"
              data-swiper-parallax="-300"
            >
              <p className="mt-52 mb-5">Assign a Handyman </p>
              <span className="mt-8"> at work to Fix the Household</span>
            </div>
            <button className="btn btn-primary w-40 rounded-3xl ml-12 text-white mt-96">
              Discover it
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="carousel-slide h-screen bg-no-repeat bg-cover relative"
            style={{ backgroundImage: `url(${images[1]})` }}
          >
            <div
              className="title text-black font-semibold text-base ml-12 md:text-3xl lg:text-5xl absolute mb-20"
              data-swiper-parallax="-300"
            >
              <p className="mt-52 mb-5">Fix the Broken stuff by Asking </p>
              <span className="mt-8"> for the Technicians</span>
            </div>
            <button className="btn bg-orange-500 border-none w-40 rounded-3xl ml-12 text-white mt-96">
              Repair it
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="carousel-slide h-screen bg-no-repeat bg-cover relative"
            style={{ backgroundImage: `url(${images[2]})` }}
          >
            <div
              className="title text-black font-semibold text-base ml-12 md:text-3xl lg:text-5xl absolute mb-20"
              data-swiper-parallax="-300"
            >
              <p className="mt-52 mb-5">Add Hands to Your</p>
              <span className="mt-8 ">Cleaning Chores</span>
            </div>
            <button className="btn bg-cyan-500 border-none  w-40 rounded-3xl ml-12 text-white mt-96">
              Book Now
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
