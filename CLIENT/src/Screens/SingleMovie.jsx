import React from 'react'
import Layout from '../Layouts/Layout'
import { useParams } from 'react-router-dom'
import Movies from './Movies'
import { movies } from '../Data/MovieData'
import MovieInfo from '../Components/Single/MovieInfo'
import Moviecast from '../Components/Single/Moviecast'

const SingleMovie = () => {

    const {id} = useParams()
    const movie = movies.find((movie) => movie.name === id)


  return (
    <>
    <Layout>
        <MovieInfo movie ={movie}/>   
        <Moviecast/>      
        {/* Reviews to be done */}
    </Layout>
    </>
  )
}

export default SingleMovie