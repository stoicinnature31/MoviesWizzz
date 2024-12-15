import React from 'react'
import { MdVideocam } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import mobile from '/images/mobile.webp'

const Promos = () => {
  return (
    <>
    <div className='max-w-screen-xl mx-auto my-20 py-10 md:px-20 px-8 bg-dry'>
      <div className='lg:grid lg:grid-cols-2 lg:gap-10 items-center'>
        <div className='flex flex-col lg:gap-10 gap-6'>
          {/* <MdVideocam className='sm:w-6 sm:h-6 w-7 h-7 m-2 text-sky-500'/> */}
          <h1 className='xl:text-2xl md:text-2xl font-bold text-sky-500 uppercase xl:leading-relaxed'>
            Download Your Movies & Watch Offline. <br /> Enjoy on Your Mobile
          </h1>
          <p className='text-white text-sm xl:text-base leading-6 xl:leading-8 py-5'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage.
          </p>

          <div className='flex gap-4 md:text-lg text-sm'>
            <div className='flex-colo bg-black text-sky-500 px-6 py-3 rounded font-bold'>
              HD 4K
            </div>
            <div className='flex-rows gap-4 bg-black text-sky-500 px-6 py-3 rounded font-bold'>
              <FaUser/>2K
            </div>
          </div>
        </div>

        <img src={mobile} alt="Mobile App" className='w-full object-contain' />
      </div>
    </div>
    </>
  )
}

export default Promos