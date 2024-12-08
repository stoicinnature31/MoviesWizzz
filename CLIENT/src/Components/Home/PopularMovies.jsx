import React, { useEffect, useRef } from 'react';
import Title from '../Title';
import { BiSolidMoviePlay } from "react-icons/bi";
import { movies } from '../../Data/MovieData';
import Movie from '../Movie';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core Swiper styles

const PopularMovies = () => {
  const swiperRef = useRef(null); // Ref for Swiper instance

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        const swiperInstance = swiperRef.current.swiper;
        swiperInstance.slideNext(); // Move to the next slide
      }
    }, 4000); // Change slides every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="my-16 bg-dry px-10 py-10">
      {/* Title Section */}
      <Title title="Popular Movies" Icon={BiSolidMoviePlay} />

      {/* Movies Slider */}
      <div className="mt-6 sm:mt-12">
        {/* For Mobile Screens */}
        <div className="block sm:hidden">
          <Swiper
            ref={swiperRef} // Attach ref to Swiper
            spaceBetween={10}
            slidesPerView={2} // Display 2 slides at a time
            breakpoints={{
              480: { slidesPerView: 3 }, // Adjust for larger mobile screens
            }}
            loop={true} // Enable infinite loop
            className="w-full"
          >
            {movies.slice(0, 8).map((movie, index) => (
              <SwiperSlide key={index} className="w-auto">
                <div className="">
                  <Movie movie={movie} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* For Larger Screens */}
        <div className="hidden sm:grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {movies.slice(0, 8).map((movie, index) => (
            <div key={index} className="">
              <Movie movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularMovies;
