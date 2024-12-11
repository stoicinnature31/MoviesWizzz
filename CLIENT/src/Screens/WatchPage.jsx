import React, { useState, useEffect } from 'react';
import Layout from '../Layouts/Layout';
import { Link, useParams } from 'react-router-dom';
import { movies } from '../Data/MovieData';
import { MdArrowBackIos } from "react-icons/md";
import { FaHeart, FaDownload } from "react-icons/fa";

const API_KEY = "AIzaSyDo6DhxhjlbMzmaG9siaz00dJgU3c7G4sE"; // Replace with your API key
const YOUTUBE_SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";

const WatchPage = () => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.name === id);
  const [trailerId, setTrailerId] = useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const response = await fetch(
          `${YOUTUBE_SEARCH_URL}?part=snippet&q=${encodeURIComponent(
            movie?.name + " trailer"
          )}&type=video&key=${API_KEY}`
        );
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          setTrailerId(data.items[0].id.videoId); // Get the first result's video ID
        } else {
          setTrailerId(null); // No trailer found
        }
      } catch (error) {
        console.error("Error fetching trailer:", error);
        setTrailerId(null);
      }
    };

    if (movie?.name) {
      fetchTrailer();
    }
  }, [movie?.name]);

  return (
    <Layout>
      <div className="container mx-auto bg-dry p-6 mb-12">
        {/* Back and Action Buttons */}
        <div className="flex-btn flex-wrap mb-6 gap-2 bg-main rounded border">
          <Link
            to={`/movies/${movie?.name}`}
            className="md:text-xl text-sm flex gap-1 items-center font-bold text-sky-500 px-2 py-4"
          >
            <MdArrowBackIos /> {movie?.name}
          </Link>

          <div className="flex-btn sm:w-auto w-full gap-5">
            <button className="bg-white hover:text-sky-500 transitions bg-opacity-30 text-sky-500 px-4 py-3 text-sm mx-2 my-2">
              <FaHeart />
            </button>
            <button className="bg-sky-500 uppercase flex-rows gap-2 hover:bg-transparent transitions text-white px-8 font-medium py-3 text-sm mx-2 my-2">
              <FaDownload /> Download
            </button>
          </div>
        </div>

        {/* Watch Video */}
        <div className="w-full h-full">
          {trailerId ? (
            <iframe
              width="100%"
              height="500px"
              src={`https://www.youtube.com/embed/${trailerId}`}
              title={`${movie?.name} Trailer`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            <p className="text-center text-gray-400">
              Trailer not available for this movie.
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default WatchPage;
