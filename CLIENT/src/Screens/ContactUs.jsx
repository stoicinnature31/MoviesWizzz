import React from 'react'
import Layout from '../Layouts/Layout'
import Head from '../Components/Head.jsx'
import tenet from '/images/tenet.jpg'
import { MdMarkEmailUnread } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocation } from "react-icons/io5";

const ContactUs = () => {

  const contactData = [
    {
      id:1,
      title:'Email Us',
      info: 'Interactively grow backend ideas for cross-platform models',
      icon: MdMarkEmailUnread,
      contact:'info@gmail.com'
    },
    {
      id:2,
      title:'Call Us',
      info: 'Interactively grow backend ideas for cross-platform models',
      icon: FiPhoneCall,
      contact:'+918583053099'
    },
    {
      id:3,
      title:'Address',
      info: '221B Baker Street in London, England',
      icon: IoLocation,
      contact:''
    },
  ]


  
  return (
    <>
    <Layout>
      <div className='min-height-screen container mx-auto px-2 my-6'>
        <Head title="Contact Us" />
        <div className='grid ld:grid-cols-2 gap-6 lg:mt-20 mt-10 lg:grid-cols-3 xl:gap-8'>
          {
            contactData.map((contact)=>(
              <div key={contact.id} className='flex-colo p-10 bg-dry rounded-lg text-center'>
                <span className='flex-colo w-20 h-20 mb-4 rounded-full bg-main text-sky-500 text-2xl'>
                <contact.icon/>
                </span>

                <h5 className='text-xl font-semibold mb-2 text-white'>{contact.title}</h5>
                <p className='mb-0 text-sm'>
                  <a href={`mailto:{contact.contact}`} className='text-blue-600'>
                    {contact.contact}
                  </a>
                  <p>{contact.info}</p>
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </Layout>
    </>
  )
}

export default ContactUs