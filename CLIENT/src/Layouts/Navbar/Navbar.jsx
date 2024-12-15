import React, { useState } from "react";
import { Navbar, NavbarContent } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi"; // Search icon
import Logo from "/images/logo.png"; // Your logo
import { NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger and close icons

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the hamburger menu

  return (
    <Navbar shouldHideOnScroll className="w-full bg-NavBG text-white h-32">
      {/* Navbar container */}
      <div className="lg:w-full flex flex-col sm:flex-row items-center px-4 py-4 sm:py-0 relative ml-8">
        {/* Logo and Search Box */}
        <div className="flex flex-col sm:flex-row w-full items-center sm:justify-between">
          <Link to={`/`} className="flex items-center justify-start w-auto mb-4 sm:mb-0">
            <img
              src={Logo}
              alt="Logo"
              className="h-16 w-auto sm:h-20" // Enlarged logo
            />
          </Link>

          {/* Search Box */}
          <form className="relative w-full sm:w-[60%] md:w-[70%] flex justify-center">
            <input
              type="text"
              className="w-full p-3 pl-12 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
              placeholder="Search Movies..."
            />
            {/* Search button */}
            <button
              type="submit"
              className="absolute right-1.5 text-white bg-blue-600 hover:bg-blue-700 p-3 rounded-full"
            >
              <FiSearch size={20} />
            </button>
          </form>
        </div>
      </div>

      {/* Hamburger Menu (Independent, aligned to the top-right corner) */}
      <div className="absolute right-4 top-4 lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu (Only shown when menuOpen is true) */}
      {menuOpen && (
        <div className="sm:flex lg:hidden bg-gray-800 text-white p-4 flex flex-col m-auto">
          <NavLink
            to="/movies"
            className="text-sky-500 font-bold uppercase"
            onClick={() => setMenuOpen(false)}>
            Movies
          </NavLink>
          <NavLink
            to="/about"
            className="text-sky-500 font-bold uppercase"
            onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="text-sky-500 font-bold uppercase"
            onClick={() => setMenuOpen(false)}>
            Contacts
          </NavLink>
          <NavLink
            to="/login"
            className="text-sky-500 font-bold uppercase"
            onClick={() => setMenuOpen(false)}>
            Login
          </NavLink>
          <NavLink
            to="/profile"
            onClick={() => setMenuOpen(false)}>
            <FaUserAlt className="w-5 h-5"/>
          </NavLink>
        </div>
      )}

      {/* Central Navigation Menu (Visible only on medium screens and larger) */}
      <NavbarContent className="hidden lg:flex gap-8 justify-center">
        <NavLink to="/movies" className={({ isActive }) => `font-bold uppercase ${isActive ? "text-blue-500" : "text-white"}`}>
          Movies
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => `font-bold uppercase ${isActive ? "text-blue-500" : "text-white"}`}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => `font-bold uppercase ${isActive ? "text-blue-500" : "text-white"}`}>
          Contacts
        </NavLink>
        <NavLink to="/login" className={({ isActive }) => `font-bold uppercase ${isActive ? "text-blue-500" : "text-white"}`}>
          Login
        </NavLink>
        <NavLink to="/profile" >
        <FaUserAlt className="w-5 h-5"/>
        </NavLink>
      </NavbarContent>
    </Navbar>
  );
}
