import React from 'react'
import Layout from '../Layouts/Layout'
import TopRatedMovies from '../Components/Home/TopRated'
import MovieCategoryMenu from '../Components/Home/MovieCategoryMenu'

const Movies = () => {
  return (
    <>
      <Layout>
        <TopRatedMovies />
      </Layout>
    </>
  )
}

export default Movies