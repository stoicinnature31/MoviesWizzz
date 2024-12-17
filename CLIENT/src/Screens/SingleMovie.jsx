import React, { useState, useEffect } from 'react';
import Layout from '../Layouts/Layout';
import { useParams } from 'react-router-dom';
import MovieInfo from '../Components/Single/MovieInfo';
import Moviecast from '../Components/Single/Moviecast';

const SingleMovie = () => {
  const { id } = useParams(); // Retrieve the movie ID from the URL
  const [movie, setMovie] = useState(null); // State to store the movie details
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`http://www.omdbapi.com/?t=${id}&apikey=81a74c01`);
        const data = await response.json();
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError("Movie not found.");
        }
      } catch (err) {
        setError("An error occurred while fetching movie data.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (error) {
    return (
      <Layout>
        <div className="text-center text-red-500 py-20">{error}</div>
      </Layout>
    );
  }

  return (
    <Layout>
      {movie ? (
        <>
          <MovieInfo movie={movie} />
          <Moviecast />
        </>
      ) : (
        <div className="text-center text-white py-20">No movie data available.</div>
      )}
    </Layout>
  );
};

export default SingleMovie;
