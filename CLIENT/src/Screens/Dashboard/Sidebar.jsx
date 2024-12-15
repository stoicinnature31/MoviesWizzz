import React from 'react'
import { FaHome } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import Layout from '../../Layouts/Layout.jsx'
import { NavLink } from 'react-router-dom';
const Sidebar = ({ children }) => {

  const sideLinks = [
    { id: 1, name: 'Home', link: '/', icon: FaHome },
    { id: 2, name: 'Dashboard', link: '/dashboard', icon: MdDashboard },
    { id: 3, name: 'Movies', link: '/movies', icon: BiSolidMoviePlay },
    { id: 4, name: 'Profile', link: '/profile', icon: FaUserAlt },
    { id: 5, name: 'Categories', link: '/categories', icon: FaUserAlt },
    { id: 6, name: 'Update Profile', link: '/update', icon: FaUserAlt },
  ];

  const active = "text-sky-500 bg-black flex-row"
  const hover = "hover:text-white hover:bg-main"
  const inActive = "rounded font-medium text-sm transitions flex flex-row gap-3 items-centere p-4"
  const Hover = ({ isActive }) =>
    isActive ? `${active} ${inActive}` : `${inActive} ${hover}`;

  return (
    <Layout>
      <div className='min-h-screen container mx-auto px-2'>
        <div className='xl:grid grid-cols-8 gap-10 items-start md:py-12 py-6'>
          <div className='col-span-2 sticky bg-dry border border-sky-500 p-6 rounded-md xl:mb-0 mb-5'>
            {
              sideLinks.map((i) => (
                <NavLink key={i.id} to={i.link} className={Hover}>
                  <i.icon className='w-5 h-5 mr-2' /> <p>{i.name}</p>
                </NavLink>
              ))
            }
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="10"
            data-aos-offset="200"
            className='col-span-6 rounded-md bg-dry border border-gray-50 p-6'>
            {children}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Sidebar