import React from 'react'
import Layout from '../Layouts/Layout'
import { useParams } from 'react-router-dom'
import Movies from './Movies'
import { movies } from '../Data/MovieData'
import MovieInfo from '../Components/Single/MovieInfo'

const SingleMovie = () => {

    const {id} = useParams()
    const movie = movies.find((movie) => movie.name === id)


  return (
    <>
    <Layout>
        <MovieInfo movie ={movie}/>        
    </Layout>
    </>
  )
}

export default SingleMovie