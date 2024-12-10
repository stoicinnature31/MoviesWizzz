import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Casts = ({ cast }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const scrollInterval = setInterval(() => {
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        // Scroll to the start if at the end
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Scroll to the next position
        slider.scrollBy({ left: 200, behavior: 'smooth' });
      }
    }, 3000); // 3 seconds interval

    return () => clearInterval(scrollInterval); // Cleanup on unmount
  }, []);

  return (
    <div
      ref={sliderRef}
      className="flex overflow-x-auto space-x-4 py-4 scrollbar-hide"
    >
      {cast.actors.map((actor, index) => (
        <div
          key={index}
          className="min-w-[200px] border border-border p-1 hover:scale-95 transition relative rounded overflow-hidden"
        >
          <Link className="w-full">
            <img
              src={`${actor?.photo}`}
              alt={actor?.name}
              className="w-full h-64 object-cover"
            />
          </Link>

          <div className="absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-3">
            {actor?.name} {/* Display actor name */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Casts;
