import React from "react";
import { Link } from "react-router-dom";
import logo from '/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-NavBG text-gray-300 py-6">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Logo */}
        <Link to={`/`} className="text-2xl font-bold text-white mb-4">
          <img src={logo} alt="" className="mx-auto"/>
        </Link>

        {/* Copyright Text */}
        <p className="text-sm mb-4">
          Copyright © {new Date().getFullYear()}. Created by{" "}
          <span className="text-sky-500 font-bold">❤️ MoviesWizZz Team ❤️</span>
        </p>

        {/* Links */}
        <div className="text-sm space-x-4">
          <Link to="/contact" className="text-blue-500 hover:text-white">
            Contact Us
          </Link>
          <Link to="/movies" className="text-blue-500 hover:text-white">
           Movies
          </Link>
          <Link to="/Login" className="text-blue-500 hover:text-white">
            login
          </Link>
          <Link to="/about" className="text-blue-500 hover:text-white">
            About Us
          </Link>
          <Link to="/profile" className="text-blue-500 hover:text-white">
            Profile
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
