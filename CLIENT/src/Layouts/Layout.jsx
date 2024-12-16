import React from 'react'
import Navbar from './Navbar/Navbar.jsx';
import Footer from './Footer/Footer.jsx';
import MovieCategoryMenu from '../Components/Home/MovieCategoryMenu.jsx';

const Layout = ({ children }) => {
    const charcoal = "#34495e";
    return (
        <>
            <div className="bg-main text-charcoal mx-auto p-3">
                <Navbar />  \
                <MovieCategoryMenu/>              
                {children}
                <Footer />
            </div>
        </>
    )
}

export default Layout