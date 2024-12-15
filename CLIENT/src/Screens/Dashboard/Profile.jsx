import React from 'react'
import Sidebar from './Sidebar'
import Uploader from '../../Components/Uploader.jsx'

const Profile = () => {
  return (
    <Sidebar>
      <div className='flex flex-col gap-6'>
        <h2 className='text-3xl font-bold text-sky-500'>Profile</h2>
        <Uploader />
      </div>
      <h4 className='text-sky-500 text-2xl font-bold'>Full Name</h4>
      <input type="text" className='w-full bg-main my-5 border-2 border-border p-5 text-white text-lg' placeholder='John Doe' />
      <h4 className='text-sky-500 text-2xl font-bold'>Email</h4>
      <input type="email" className='w-full bg-main my-5 border-2 border-border p-5 text-white text-lg' placeholder='example@gmail.com' />

      <div className='flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4'>
        <button className='bg-sky-500 font-medium transitions hover:bg-transparent border border-sky-500 text-white py-4 px-4 rounded w-full sm:w-auto'>Delete Account</button>
        <button className='bg-sky-500 font-medium transitions hover:bg-transparent border border-sky-500 text-white py-4 px-4 rounded w-full sm:w-auto'>Update Profile</button>
      </div>
    </Sidebar>
  )
}

export default Profile