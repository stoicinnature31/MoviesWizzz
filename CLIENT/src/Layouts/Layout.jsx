import React from 'react'
import Navbar from './Navbar/Navbar.jsx';
import Footer from './Footer/Footer.jsx';

const Layout = ({ children }) => {
    const charcoal = "#34495e";
    return (
        <>
            <div className="bg-main text-charcoal">
                <Navbar />                
                {children}
                <Footer />
            </div>
        </>
    )
}

export default Layout