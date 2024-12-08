import { Navbar, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi"; // Search icon
import Logo from "/images/logo.png"; // Your logo
import { NavLink } from "react-router-dom";

export default function App() {
  return (
    <Navbar shouldHideOnScroll className="w-full bg-NavBG text-white h-32">
      {/* Navbar container */}
      <div className="lg:w-full flex flex-col sm:flex-row items-center px-4 py-4 sm:py-0">

        {/* Logo (Aligned to the extreme left on all screen sizes) */}
        <div className="flex items-center justify-start w-auto sm:mr-auto">
          <img
            src={Logo}
            alt="Logo"
            className="h-16 w-auto sm:h-20" // Enlarged logo
          />
        </div>

        {/* Search Box (Stacked below the logo on mobile, horizontally aligned on larger screens) */}
        <form className="relative w-full sm:w-[60%] md:w-[70%] flex justify-center mb-4 sm:mb-0">
          <input
            type="text"
            className="w-full p-3 pl-12 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
            placeholder="Search Movies..."
          />
          {/* Search button visible on mobile and larger screens */}
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-blue-600 hover:bg-blue-700 p-3 rounded-full"
          >
            <FiSearch size={20} />
          </button>
        </form>

        {/* Right-Aligned Content for larger screens */}
        <NavbarContent justify="end" className="gap-6 hidden sm:flex mx-2">
          <NavLink to="/about" className=" hidden lg:flex text-sky-500 font-bold uppercase">
            About
          </NavLink>
          <NavLink to="/contacts" className="hidden lg:flex text-sky-500 font-bold uppercase">
            Contacts
          </NavLink>
        </NavbarContent>
      </div>

      {/* Central Navigation Menu (Visible only on medium screens and larger) */}
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {/* Central menu items */}
      </NavbarContent>
    </Navbar>
  );
}
