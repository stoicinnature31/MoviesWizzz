import React from 'react'
import { Link } from 'react-router-dom'

const Movie = ({ movie }) => {
  return (
    <>
      <div className='border border-border p-1 hover:scale-95 transition relative rounded overflow-hidden'>
        <Link to={`/movies/${movie?.name}`} className='w-full'>
        <img src={`${movie?.i.imageUrl}`} alt={movie?.name} className='w-full h-64 object-cover' />
        </Link>

        <div className='absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-3'>
          {/* //Need to see later 1:18: 29 */}
        </div>
      </div>
    </>
  )
}

export default Movie