import React, { useState, useEffect, memo } from "react";
import Pagination from "./Pagination"; // Import the pagination component
import { Link } from "react-router-dom";

const TopRatedMovies = () => {
  const [movies, setMovies] = useState([]); // State to hold fetched movies
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // Total number of pages from OMDb API
  const moviesPerPage = 12; // Number of movies to display per page

  // Fetch movies from the OMDb API (fetching multiple pages)
  const fetchMovies = async () => {
    const movie = [];
    const totalResults = 100; // Limit to a total of 100 results, adjust as needed
    const keywords = ["horror","game", "suspense", "movie", "comedy", "thriller"]; // Modify search terms to expand results

    // Loop through multiple pages of results
    for (let page = 1; page <= Math.ceil(totalResults / 10); page++) {
      const url = `http://www.omdbapi.com/?s=game&page=${page}&apikey=81a74c01`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        
        if (data && data.Search) {
          movie.push(...data.Search);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
    console.log(movie)
    setMovies(movie); // Set all the fetched movies
    setTotalPages(Math.ceil(movie.length / moviesPerPage)); // Set total pages for pagination
  };

  // Fetch movies on component mount
  useEffect(() => {
    fetchMovies();
  }, []);

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
        <h1 className="text-3xl font-bold text-sky-500 mb-6">Top Rated Movies</h1>

        {/* Movies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {currentMovies.map((movie, index) => (
            <div key={index} className="bg-dry rounded overflow-hidden shadow-lg">
              <Link to={`/movies/${movie?.Title}`}>
                <img
                  src={movie?.Poster !== "N/A" ? movie?.Poster : "https://via.placeholder.com/300"}
                  alt={movie.Title}
                  className="w-full h-72 object-cover"
                />
              </Link>
              <div className="p-4 text-center">
                <h3 className="text-sm font-bold text-white truncate">
                  {movie.Title}
                </h3>
                <p className="text-sm text-gray-400">
                  {movie?.Year} • {movie?.Runtime}
                </p>
                <p className="text-xs text-blue-700 font-semibold mt-2">
                  ⭐ {movie?.Type}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages} // Use the calculated total pages
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default memo(TopRatedMovies);
