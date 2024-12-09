import React, { useState } from "react";
import Pagination from "./Pagination"; // Import the pagination component
import { movies } from "../../Data/MovieData.js"; // Example movie data

const TopRatedMovies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 24; // Number of movies to display per page

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const currentMovies = movies.slice(startIndex, endIndex); // Slice the movies for the current page

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="my-16 bg-dry px-10 py-10">
      {/* Title Section */}
      <h1 className="text-2xl font-bold text-white mb-6">Top Rated Movies</h1>

      {/* Movies Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {currentMovies.map((movie, index) => (
          <div key={index} className="bg-NavBG p-2 rounded-lg">
            <img
              src={movie.i.imageUrl}
              alt={movie.name}
              className="w-full h-60 object-cover rounded"
            />
            <h3 className="mt-2 text-lg font-bold text-white truncate">
              {movie.name}
            </h3>
            <p className="text-sm text-gray-400">
              {movie.year} • {movie.quality}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(movies.length / moviesPerPage)} // Calculate total pages
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default TopRatedMovies;
