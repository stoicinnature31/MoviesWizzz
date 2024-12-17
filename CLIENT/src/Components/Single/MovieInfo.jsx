import React from 'react'
import { FaShareNodes } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaYoutube } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

const MovieInfo = ({movie}) => {
  return (
    <div className='max-w-screen-xl mx-auto  xl:h-screen relative text-white'>
      <img src={`${movie?.Poster}`} alt={movie.Title} className='w-full hidden xl:inline-block h-full object-cover' />

      <div className='xl:bg-main bg:dry flex-colo xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0'>
        <div className='container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:py-20 gap-8'>
          <div className='xl:col-span-1 w-full xl:order-none order-last h-header bg-dry'>
            <img src={`${movie?.Poster}`} alt={movie?.Title} className='w-full h-full object-cover' />
          </div>

          <div className='col-span-2 md:grid grid-cols-5 gap-4 items-center'>
            <div className='col-span-3 flex flex-col gap-10'>
              {/* Title */}
              <h1 className='xl:text-4xl capitalize font-sans text-2xl font-bold text-sky-500'>{movie?.Title}</h1>

              <div className='flex items-center gap-4 font-medium text-sky-500'>
                <div className='flex-colo bg-NavBG text-xs px-4 py-4 my-7'>
                  HD 4K
                </div>
                <div className='flex-colo bg-NavBG text-xs px-6 py-4 my-7'>
                  HD 1080P
                </div>
                <div className='flex-colo bg-NavBG text-xs px-6 py-4 my-7'>
                  HD 720P
                </div>
              </div>

              {/* Description */}
              <p className='text-text text-sm leading-7'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit iusto nam inventore! Hic, blanditiis? Non.
              </p>

              <div className='grid sm:grid-cols-4 grid-cols-3 gap-4 p-6 bg-main '>
                {/* share */}
                <div className='col-span-1 flex-colo border-r border-border'>
                  <button className='w-10 h-10 flex-colo bg-NavBG bg-opacity-20 transitions hover:bg-sky-500'>
                    <FaShareNodes className='w-10 h-6 text-blue-700'/>
                  </button>
                </div>
                {/* category */}
                <div className='col-span-2 flex-colo font-medium text-sm'>
                  <p>Category : {' '} <span className='ml-2 truncate'>{movie?.Type}</span></p>
                </div>

                {/* Watch Button */}
                <div className='sm:col-span-2 col-span-3 flex justify-end font-medium text-sm'>
                  <Link to={`/watch/${movie?.Title}`} className='bg-dry hover:bg-sky-500 transitions border-2 border-dry flex-rows gap-4 w-full sm:py-5 py-5'>
                   <FaYoutube className='w-10 h-6 text-blue-700'/> Watch Trailer
                  </Link>
                </div>
                <div className='sm:col-span-2 col-span-3 flex justify-end font-medium text-sm'>
                  <Link to={`/watch/${movie?.Title}`} className='bg-dry hover:bg-sky-500 transitions border-2 border-dry flex-rows gap-4 w-full sm:py-5 py-5'>
                   <FaPlay className='w-10 h-6 text-blue-700'/> Watch Online
                  </Link>
                </div>
              </div>
            </div>

            <div className='col-span-2 md:mt-0 mt-2 flex justify-end'>
              <button className='md:w-1/4 w-full relative flex-colo bg-sky-500 hover:bg-transparent border-2 border-sky-500 transitions md:h-64 h-20 font-medium'>
              <div className='flex-rows gap-6 text-md uppercase tracking-widest absolute md:rotate-90'>
                Download <FaDownload className='w-5 h-6'/>
              </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieInfo