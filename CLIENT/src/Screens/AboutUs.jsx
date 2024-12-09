import React from 'react'
import Layout from '../Layouts/Layout'
import Head from '../Components/Head.jsx'
import tenet from '/images/tenet.jpg'

const AboutUs = () => {
  return (
    <Layout>
      <div className='min-height-screen container mx-auto px-2 my-6'>
        <Head title="About Us" />
        <div className='xl:py-20 py-10 px-4'>
          {/* Grid container for the entire section */}
          <div className='grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center'>
            {/* Left Section */}
            <div>
              <h3 className='text-xl lg:text-3xl mb-4 font-semibold text-sky-500'>
                Welcome to our MoviesWizZz
              </h3>
              <div className='mt-3 text-sm leading-8 text-white'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, aspernatur veniam! Ea vero aperiam asperiores fuga enim vitae, iusto delectus rerum incidunt quibusdam pariatur ipsa nemo sint ipsam cum quo officiis tenetur nobis id ducimus porro non optio laborum. Velit aut cum laboriosam aspernatur nam consequuntur amet dicta pariatur similique!
                </p>
              </div>

              {/* Combine the two boxes in one grid container */}
              <div className='grid md:grid-cols-2 gap-6 mt-8'>
                <div className='p-8 bg-dry rounded-lg text-sky-500'>
                  <span className='text-3xl block font-extrabold mt-4'>
                    10K
                  </span>
                  <h4 className='text-lg font-bold my-2'>Listed Movies</h4>
                  <p className='mb-0 text-sky-500 leading-7 text-sm'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>

                <div className='p-8 bg-dry rounded-lg text-sky-500'>
                  <span className='text-3xl block font-extrabold mt-4'>
                    8K
                  </span>
                  <h4 className='text-lg font-bold my-2'>Lovely Users</h4>
                  <p className='mb-0 text-sky-500 leading-7 text-sm'>
                    Completely free, without registration
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section (Image) */}
            <div className='mt-10 lg:mt-0'>
              <img
                src={tenet}
                alt="Tenet Movie Poster"
                className='w-full rounded-lg xl:block hidden shadow-lg object-cover h-header'
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutUs
