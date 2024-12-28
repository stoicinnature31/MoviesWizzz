import React, { useState, useEffect } from 'react';
import Layout from '../Layouts/Layout';
import { Link, useParams } from 'react-router-dom';
import { MdArrowBackIos } from "react-icons/md";
import { FaHeart, FaDownload } from "react-icons/fa";

const OMDB_API_KEY = "81a74c01"; // Replace with your OMDB API key
const OMDB_API_URL = "https://www.omdbapi.com/";

const WatchPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailerId, setTrailerId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `${OMDB_API_URL}?t=${encodeURIComponent(id)}&apikey=${OMDB_API_KEY}`
        );
        const data = await response.json();
        if (data.Response === "True") {
          setMovie(data);
          fetchTrailer(data.Title); // Fetch trailer after movie is fetched
        } else {
          setError("Movie not found.");
          setMovie(null);
        }
      } catch (err) {
        console.error("Error fetching movie:", err);
        setError("An error occurred while fetching movie data.");
      } finally {
        setLoading(false);
      }
    };

    const fetchTrailer = async (title) => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
            title + " trailer"
          )}&type=video&key=AIzaSyDo6DhxhjlbMzmaG9siaz00dJgU3c7G4sE`
        );
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          setTrailerId(data.items[0].id.videoId);
        } else {
          setTrailerId(null);
        }
      } catch (error) {
        console.error("Error fetching trailer:", error);
        setTrailerId(null);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="text-center text-white py-20">Loading...</div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="text-center text-red-500 py-20">{error}</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto bg-dry p-6 mb-12">
        {/* Back and Action Buttons */}
        <div className="flex-btn flex-wrap mb-6 gap-2 bg-main rounded border">
          <Link
            to={`/movies/${id}`}
            className="md:text-xl text-sm flex gap-1 items-center font-bold text-sky-500 px-2 py-4"
          >
            <MdArrowBackIos /> {movie?.Title}
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
        <div className="w-full h-full flex justify-center items-center bg-gray-900 p-4 rounded-lg shadow-lg">
          {trailerId ? (
            <iframe
              className="rounded-lg"
              width="100%"
              height="500px"
              src={`https://www.youtube.com/embed/${trailerId}`}
              title={`${movie?.Title} Trailer`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            <p className="text-center text-gray-400 text-lg italic">
              Trailer not available for this movie.
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default WatchPage;
