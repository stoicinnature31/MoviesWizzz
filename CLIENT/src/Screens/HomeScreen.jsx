import React from 'react'
import Layout from '../Layouts/Layout'
import Banner from '../Components/Home/Banner'
import PopularMovies from '../Components/Home/PopularMovies'
import Promos from '../Components/Home/Promos'
import TopRated from '../Components/Home/TopRated'

const HomeScreen = () => {
  return (
    <Layout>
        <div className='container  mx-auto min-h-screen px-2 mb-6'>HomeScreen</div>
        <Banner/>
        <Promos/>
        <PopularMovies/>
        <TopRated/>
    </Layout>
  )
}

export default HomeScreen