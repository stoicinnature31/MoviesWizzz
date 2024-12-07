import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi"; // Search icon
import Logo from "/images/logo.png"; // Your logo

export default function App() {
  return (
    <Navbar shouldHideOnScroll className="w-full bg-NavBG text-white">
      {/* Navbar container */}
      <div className="w-full flex justify-between items-center px-4">

        {/* Logo (Centered on small screens, left-aligned on larger screens) */}
        <NavbarBrand className="flex items-center justify-center sm:justify-start w-full">
          <img src={Logo} alt="Logo" className="h-12 w-auto" />
        </NavbarBrand>

        {/* Search Box (Visible on medium screens and up, hidden on small screens) */}
        <form className="relative w-full max-w-[600px] sm:max-w-[800px] md:max-w-[900px] lg:max-w-[1000px] flex-1 mx-4 hidden md:flex justify-center">
          <input
            type="text"
            className="w-full p-3 pl-12 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
            placeholder="Search Movies..."
          />
          {/* Search button hidden on small screens */}
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-blue-600 hover:bg-blue-700 p-3 rounded-full hidden sm:block"
          >
            <FiSearch size={20} />
          </button>
        </form>

        {/* Right-Aligned Content for larger screens */}
        <NavbarContent justify="end" className="gap-4 hidden md:flex">
          <NavbarItem className="hidden lg:flex">
            <Button as={Link} color="primary" href="#" variant="flat" aria-label="Sign Up">
              Sign Up
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat" aria-label="Sign Up">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </div>

      {/* Search Box below the logo for small screens (Hidden on medium screens and up) */}
      <div className="w-full flex justify-center md:hidden px-4 py-2">
        {/* No search box for small screens */}
      </div>

      {/* Central Navigation Menu (Visible only on medium screens and larger) */}
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {/* Central menu items */}
      </NavbarContent>
    </Navbar>
  );
}
