import React from 'react'
import Banner from '../Components/Home/Banner.jsx'
import PopularMovies from '../Components/Home/PopularMovies'
import Promos from '../Components/Home/Promos'
import TopRated from '../Components/Home/TopRated'
import Layout from '../Layouts/Layout'

const HomeScreen = () => {
  return (
    <Layout>
        <Banner/>
        <PopularMovies/>
        <Promos/>
        <TopRated/>
    </Layout>
  )
}

export default HomeScreen