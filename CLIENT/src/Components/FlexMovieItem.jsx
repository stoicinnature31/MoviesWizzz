import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa'; // Correct import path

const FlexMovieItem = ({ movie }) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">{movie.category}</span>
      </div>
      <div className="flex items-center gap-2">
        <FaRegCalendarAlt className="text-sky-500 w-3 h-3" />
        <span className="text-sm font-medium">{movie.year}</span>
      </div>
    </>
  );
};

export default FlexMovieItem;
