import React, { useState, useRef } from 'react';
import Title from '../Title';
import { MdGeneratingTokens } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper styles
import { movies } from "./../../Data/MovieData.js"; // Import the movies data
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Use arrow icons

const TopRated = () => {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext(); // Move to the next slide
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev(); // Move to the previous slide
    }
  };

  return (
    <div className="bg-dry my-16">
      <Title title="Top Rated" Icon={MdGeneratingTokens} />
      <div className="mt-10 relative">
        {/* Swiper Slider */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Store swiper instance
          spaceBetween={20}
          slidesPerView={3} // Show 3 slides at a time
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="p-4 bg-gray-200 rounded-lg text-center">
                {/* Movie Poster */}
                <img
                  src={movie.i.imageUrl}
                  alt={movie.name}
                  className="w-full h-72 object-cover rounded-lg mb-4"
                  style={{ maxHeight: `${movie.i.height}px`, maxWidth: `${movie.i.width}px` }}
                />
                {/* Movie Title */}
                <h3 className="text-lg font-semibold">{movie.name}</h3>
                {/* Additional Info */}
                <p className="text-sm text-gray-600">
                  {movie.category} • {movie.year}
                </p>
                <p className="text-xs text-gray-500">
                  Actors: {movie.actors}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="absolute left-0 right-0 bottom-[-30px] z-10 flex justify-between px-4">
          <button
            className="bg-gray-800 text-white p-2 rounded-full"
            onClick={handlePrev}
          >
            <FaArrowLeft size={24} />
          </button>
          <button
            className="bg-gray-800 text-white p-2 rounded-full"
            onClick={handleNext}
          >
            <FaArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopRated;
