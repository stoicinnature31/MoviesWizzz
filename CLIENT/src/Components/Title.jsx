import React from 'react'

const Title = ({title,Icon}) => {
  return (
    <div className='w-full flex sm:gap-8 gap-4 items-center'>
        <Icon className='sm:w-6 sm:h-6 w-4 h-4 m-2 text-subMain'/>
        <h2 className='sm:text-xl font-bold text-lg text-white capitalize'>{title}</h2>
    </div>
  )
}

export default Title