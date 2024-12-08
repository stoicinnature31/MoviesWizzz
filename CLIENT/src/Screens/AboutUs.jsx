import React from 'react'
import Layout from '../Layouts/Layout'
import Head from '../Components/Head.jsx'

const AboutUs = () => {
  return (
    <Layout>
      <div className='min-height-screen container mx-auto px-2 my-6'>
        <Head title="About Us"/>
        <div className='xl:py-20 py-10 px-4'>
          <div className='grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center'>
            <div>
              <h3 className='text-xl lg:text-3xl mb-4 font-semibold text-sky-500'>
                Welcome to our MoviesWizZz
              </h3>
              <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, aspernatur veniam! Ea vero aperiam asperiores fuga enim vitae, iusto delectus rerum incidunt quibusdam pariatur ipsa nemo sint ipsam cum quo officiis tenetur nobis id ducimus porro non optio laborum. Velit aut cum laboriosam aspernatur nam consequuntur amet dicta pariatur similique!</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutUs