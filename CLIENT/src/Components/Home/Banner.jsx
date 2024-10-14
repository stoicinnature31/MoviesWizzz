import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles

const Banner = () => {
  return (
    <div className="relative w-full">
      <Swiper
        direction="vertical"
        spaceBetween={0}
        slidesPerView={1}
        speed={1000}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }} // No need for 'Autoplay' module import
        className="w-full xl:h-96 bg-dry lg:h-64 h-48"
      >
        {/* Swiper Slides */}
        <SwiperSlide>
          <div className="h-full w-full bg-blue-500 flex items-center justify-center">
            <h1 className="text-white text-2xl">Slide 1: Your Banner Text</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full w-full bg-red-500 flex items-center justify-center">
            <h1 className="text-white text-2xl">Slide 2: Some More Info</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full w-full bg-green-500 flex items-center justify-center">
            <h1 className="text-white text-2xl">Slide 3: Add More Slides</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
