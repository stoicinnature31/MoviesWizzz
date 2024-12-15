import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import { movies } from "./../../Data/MovieData.js"; // Ensure correct data path
import FlexMovieItem from "../FlexMovieItem.jsx";

const Banner = () => {
  const swiperRef = useRef(null); // Ref for Swiper instance

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        const swiperInstance = swiperRef.current.swiper;
        swiperInstance.slideNext(); // Move to the next slide
      }
    }, 4000); // Change slides every 4 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="relative max-w-screen-xl overflow-hidden mt-16" style={{ margin: "0 auto" }}>
      <Swiper
        ref={swiperRef} // Attach ref to Swiper
        slidesPerView={1} // Default to one slide per view
        spaceBetween={10} // Space between slides
        speed={2000} // Smooth transition
        loop={true} // Infinite loop
        className="w-full lg:w-screen h-[700px]" // Full width on large screens, default for others
        direction="horizontal" // Horizontal direction for all screens
        breakpoints={{
          1024: {
            // Horizontal sliding for screens >= 1024px
            slidesPerView: 3, // Show 3 slides at a time
            spaceBetween: 30, // Add spacing between slides
          },
        }}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index} className="relative rounded overflow-hidden">
            {/* Movie Image */}
            <img
              src={movie.i.imageUrl}
              alt={movie.name}
              className="w-full h-full object-cover"
            />

            {/* Overlay Content */}
            <div className="absolute linear-bg top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-start px-4 md:px-8 lg:px-16 text-white bg-gradient-to-t from-black to-transparent">
              <h2 className="xl:text-4xl sm:text-3xl text-2xl font-bold capitalize truncate">
                {movie.name}
              </h2>
              <div className="mt-4">
                <FlexMovieItem movie={movie} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
