import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./carousel.css";
import SwiperCore, { Parallax, Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination]);

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1627905646269-7f034dcc5738?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2xlYW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    "https://media.istockphoto.com/id/1433923860/photo/concept-of-cleaning-service-during-the-new-year-holidays.jpg?b=1&s=170667a&w=0&k=20&c=f3xfsyzCTlRk-vgACpkSC44kDsQaDy9mB7OZ2FX3tsQ=",
    "/path/to/image3.jpg",
  ];

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    /*     <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/docs/images/carousel/carousel-1.svg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/docs/images/carousel/carousel-2.svg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/docs/images/carousel/carousel-3.svg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/docs/images/carousel/carousel-4.svg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/docs/images/carousel/carousel-5.svg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>

      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
        ></button>
      </div>

      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div> */
    <div
      className="hero min-h-screen bg-base-200"
      style={{
        "background-image":
          "url(https://images.unsplash.com/photo-1584717900604-56cd6daf54f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNsZWFuZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60)",
      }}
    >
      <div className="hero-content text-center mt-40">
        <div className="max-w-2xl">
          <p className="text-base md:text-xl lg:text-5xl font-bold text-white">
            Assign a Handyman at work <br />
            {/* <span className="py-8 mt-10 text-white mb-8">
              to Fix the Househol
            </span> */}
          </p>
          <p className="py-6 text-white text-base md:text-xl font-bold lg:text-5xl">
            to Fix the Household
          </p>

          <button className="btn btn-primary mt">Discover it</button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

{
  /* <div className="carousel-container mb-10 ">
<Swiper navigation pagination onSlideChange={handleSlideChange}>
  <SwiperSlide>
    <div
      className="carousel-slide h-screen bg-no-repeat bg-cover mb-10"
      style={{ backgroundImage: `url(${images[0]})` }}
    >
      <div
        className="title text-white font-semibold text-base md:text-3xl lg:text-5xl"
        data-swiper-parallax="-300"
      >
        <p className="ml-32 mt mb-5">Assign a Handyman </p>
        <span className="mt-8 ml-32"> at work to Fix the Household</span>
      </div>
      <button className="btn btn-primary mt-12 ml-32 text-white">
        Discover it
      </button>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div
      className="carousel-slide h-screen bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${images[1]})` }}
    >
      <div
        className="title text-gray-800 font-semibold text-base md:text-4xl lg:text-5xl"
        data-swiper-parallax="-300"
      >
        <p className="mb-5">Fix the Broken stuff by Asking </p>
        <span className="mt-8">for the Technicians</span>
      </div>

      <button className="btn bg-orange-500 border-none border-radius mt-12 text-white">
        Repair
      </button>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div
      className="carousel-slide h-screen bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${images[2]})` }}
    >
      <div
        className="title text-gray-800 font-semibold text-base md:text-4xl lg:text-5xl"
        data-swiper-parallax="-300"
      >
        <p className="mb-5">Assign a Handyman at work </p>
        <span className="mt-8"> to Fix the Househol</span>
      </div>

      <button className="btn bg-indigo-400 mt-12 text-white rounded-xl">
        Book Now
      </button>
    </div>
  </SwiperSlide>
</Swiper>
</div> */
  /*  <div className="mb-10">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper h-screen"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image":
              "url(https://media.istockphoto.com/id/1433923860/photo/concept-of-cleaning-service-during-the-new-year-holidays.jpg?b=1&s=170667a&w=0&k=20&c=f3xfsyzCTlRk-vgACpkSC44kDsQaDy9mB7OZ2FX3tsQ=)",
          }}
          data-swiper-parallax="-23%"
        ></div>{" "}
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image":
              "url(https://images.unsplash.com/photo-1627905646269-7f034dcc5738?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2xlYW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60)",
          }}
          data-swiper-parallax="-23%"
        ></div>{" "}
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image":
              "url(https://media.istockphoto.com/id/1433923860/photo/concept-of-cleaning-service-during-the-new-year-holidays.jpg?b=1&s=170667a&w=0&k=20&c=f3xfsyzCTlRk-vgACpkSC44kDsQaDy9mB7OZ2FX3tsQ=)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide className="mt-40">
          <div className="flex gap-3">
            <div>
              {" "}
              <div
                className="title text-gray-800 font-semibold text-base md:text-3xl lg:text-5xl"
                data-swiper-parallax="-300"
              >
                <p className="mb-5">Assign a Handyman </p>
                <span className="mt-8"> at work to Fix the Household</span>
              </div>
              <button className="btn btn-primary mt-12 text-white">
                Discover it
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mt-40">
          <div
            className="title text-gray-800 font-semibold text-base md:text-4xl lg:text-5xl"
            data-swiper-parallax="-300"
          >
            <p className="mb-5">Fix the Broken stuff by Asking </p>
            <span className="mt-8">for the Technicians</span>
          </div>

          <button className="btn bg-orange-500 border-none border-radius mt-12 text-white">
            Repair
          </button>
        </SwiperSlide>
        <SwiperSlide className="mt-40">
          <div
            className="title text-gray-800 font-semibold text-base md:text-4xl lg:text-5xl"
            data-swiper-parallax="-300"
          >
            <p className="mb-5">Assign a Handyman at work </p>
            <span className="mt-8"> to Fix the Househol</span>
          </div>

          <button className="btn bg-indigo-400 mt-12 text-white">
            Book Now
          </button>
        </SwiperSlide>
      </Swiper>
    </div> */
}
