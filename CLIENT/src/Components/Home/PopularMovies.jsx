import React from 'react'
import Title from '../Title'
import {BsCollectionFill} from 'react-icons/bs'

const PopularMovies = () => {
  return (
    <div className='my-16'>
      <Title title="Popular Movies" Icon={BsCollectionFill}/>
      <div className='grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
        {
          Movies.slice(0,8).map((movie, index) => (
            <div key={index} className='bg-white rounded-md shadow-md p-4'></div>
          ))
        }
      </div>
    </div>
  )
}

export default PopularMovies