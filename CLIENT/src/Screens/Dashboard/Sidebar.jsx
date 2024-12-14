import React from 'react'
import { FaHome } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";

const Sidebar = () => {
    const sideLinks = [
        { id: 1, name: 'Home', link: '/', icon: FaHome},
        { id: 2, name: 'Dashboard', link: '/dashboard', icon: MdDashboard},
        { id: 3, name: 'Movies', link: '/movies', icon: BiSolidMoviePlay},        
        { id: 4, name: 'Profile', link: '/profile', icon: FaUserAlt },        
        { id: 4, name: 'Profile', link: '/profile', icon: FaUserAlt },        
        { id: 4, name: 'Profile', link: '/profile', icon: FaUserAlt },        
    ];
  return (
    <div className='min-h-screen container mx-auto px-2'>
        <div className='xl:grid grid-cols-8 gap-10 items-start md:py-12 py-6'>
            <div className='col-span-2 sticky bg-dry border border-sky-500 p-6 rounded-md xl:mb-0 mb-5'>
                
            </div>
        </div>
    </div>
  )
}

export default Sidebar