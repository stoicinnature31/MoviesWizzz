import React from 'react'

const Title = ({title,Icon}) => {
  return (
    <div className='w-full flex sm:gap-8 gap-4 items-center'>
        <Icon className='sm:w-6 sm:h-6 w-4 h-4 text-subMain'/>
        <h1 className='text-2xl sm:text-3xl font-bold text-main'>{title}</h1>
    </div>
  )
}

export default Title