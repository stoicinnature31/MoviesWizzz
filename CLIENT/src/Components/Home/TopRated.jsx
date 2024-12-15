import React, { useState } from "react";
import Pagination from "./Pagination"; // Import the pagination component
import { movies } from "../../Data/MovieData.js"; // Example movie data
import { Link } from "react-router-dom";

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
    <div className="my-16 bg-black px-10 py-10">
      <div className="max-w-screen-xl mx-auto">
        {/* Title Section */}
        <h1 className="text-3xl font-bold text-white mb-6">Top Rated Movies</h1>

        {/* Movies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {currentMovies.map((movie, index) => (
            <div key={index} className="bg-dry rounded overflow-hidden shadow-lg">
              <Link to={`/movies/${movie?.name}`}>
                <img
                  src={movie.i.imageUrl}
                  alt={movie.name}
                  className="w-full h-72 object-cover"
                />
              </Link>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-white truncate">
                  {movie.name}
                </h3>
                <p className="text-sm text-gray-400">
                  {movie.year} • {movie.quality}
                </p>
                <p className="text-xs text-green-400 font-semibold mt-2">
                  ⭐ {movie.rating || "7/10"}
                </p>
              </div>
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
    </div>
  );
};

export default TopRatedMovies;
