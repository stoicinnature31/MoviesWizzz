import React from 'react'

const Title = ({title,Icon}) => {
  return (
    <div className='w-full flex sm:gap-8 gap-4 items-center'>
        <Icon className='sm:w-6 sm:h-6 w-5 h-5 m-2 text-sky-500'/>
        <h2 className='sm:text-xl font-bold text-lg text-sky-500 uppercase'>{title}</h2>
    </div>
  )
}

export default Title