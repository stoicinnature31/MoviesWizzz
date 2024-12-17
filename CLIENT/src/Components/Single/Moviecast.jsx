import React, { useEffect, useRef } from 'react';
import Title from '../Title.jsx';
import { FaUserFriends } from "react-icons/fa";
import { casts } from '../../Data/CastData.js';
import Cast from '../Casts.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core Swiper styles

const Moviecast = () => {
  const swiperRef = useRef(null); // Ref for Swiper instance

  useEffect(() => {
    // Automatically advance slides every 4 seconds
    const interval = setInterval(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        const swiperInstance = swiperRef.current.swiper;
        swiperInstance.slidePrev(); // Move to the previous slide (left direction)
      }
    }, 4000); // 4 seconds interval

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <>
      <div className="my-12 max-w-screen-xl mx-auto">
        <Title title="Casts" Icon={FaUserFriends} />
        {/* Single Horizontal Slider */}
        <div className="mt-6">
          <Swiper
            ref={swiperRef} // Attach ref to Swiper
            spaceBetween={10} // Adjust space between slides
            slidesPerView={1} // Default to 1 slide for smaller screens
            loop={true} // Enable infinite loop
            rtl={true} // Enable RTL (Right-to-left) for leftward sliding
            breakpoints={{
              768: { slidesPerView: 3 }, // Tablets: 3 slides in a single line
              1024: { slidesPerView: 5 }, // Laptops and larger: 5 slides
            }}
            className="w-full"
          >
            {casts.map((cast, index) => (
              <SwiperSlide key={index} className="w-auto">
                <Cast cast={cast} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Moviecast;
