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
    }, 3000); // Change slides every 4 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="max-w-screen-xl my-16 bg-dry px-10 py-10 mx-auto">
      {/* Title Section */}
      <Title title="Popular Movies" Icon={BiSolidMoviePlay} />

      {/* Movies Slider */}
      <div className="mt-6">
        <Swiper
          ref={swiperRef} // Attach ref to Swiper
          spaceBetween={20} // Space between slides
          slidesPerView={2} // Default: Display 2 slides on smaller screens
          loop={true} // Enable infinite loop
          breakpoints={{
            768: { slidesPerView: 3 }, // Tablets: 3 slides
            1024: { slidesPerView: 4 }, // Laptops and larger: 4 slides
          }}
          className="w-full"
        >
          {movies.map((movie, index) => (
            <SwiperSlide key={index} className="w-auto">
              <Movie movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularMovies;
