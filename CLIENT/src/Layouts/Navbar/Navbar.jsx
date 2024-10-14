import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Dropdown, Link, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import logo from '/images/logo.png'
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

export default function App() {
    return (
        <Navbar className="bg-NavBG">
            <div className="flex justify-around items-center w-full">
                {/* Logo */}
                <NavLink to="/" className="justify-start">
                    <img src={logo} alt="" width="260px" />
                </NavLink>

                {/* Hamburger Menu for Mobile */}
                <div className="block sm:hidden">
                    <button id="hamburger" className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>

                {/* Search Bar (Hidden on small screens) */}
                <form className="hidden sm:block form relative">
                    <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
                        <svg
                            width="17"
                            height="16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-labelledby="search"
                            className="w-5 h-5 text-gray-700"
                        >
                            <path
                                d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                                stroke="currentColor"
                                strokeWidth="1.333"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </button>
                    <input
                        className="input rounded-full px-10 py-2.5 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md bg-main max-w-full"
                        placeholder="Search Movies..."
                        required=""
                        type="text"
                    />
                    <button type="reset" className="absolute right-3 -translate-y-1/2 top-1/2 p-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-gray-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                </form>

                {/* Dropdown (Hidden on small screens) */}
                <div className="hidden sm:block">
                    <NavbarBrand>
                        <Dropdown backdrop="blur" className="bg-NavBG">
                            <DropdownTrigger>
                                <Button variant="outline" className="text-white uppercase font-extrabold">
                                    Genre
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu variant="faded" aria-label="Static Actions">
                                <DropdownItem key="new" className="text-blue-600"><NavLink to="/adventure">Adventure</NavLink></DropdownItem>
                                <DropdownItem key="new" className="text-blue-600"><NavLink to="/adventure">Horror</NavLink></DropdownItem>
                                <DropdownItem key="new" className="text-blue-600"><NavLink to="/adventure">Romance</NavLink></DropdownItem>
                                <DropdownItem key="new" className="text-blue-600"><NavLink to="/adventure">Thriller</NavLink></DropdownItem>
                                <DropdownItem key="new" className="text-blue-600"><NavLink to="/adventure">Suspense</NavLink></DropdownItem>
                                <DropdownItem key="new" className="text-blue-600"><NavLink to="/adventure">Sci-Fi</NavLink></DropdownItem>
                                <DropdownItem key="new" className="text-blue-600"><NavLink to="/adventure">Animation</NavLink></DropdownItem>
                                <DropdownItem key="new" className="text-blue-600"><NavLink to="/adventure">Action</NavLink></DropdownItem>
                                <DropdownItem key="new" className="text-blue-600"><NavLink to="/adventure">Drama</NavLink></DropdownItem>
                                <DropdownItem key="new" className="text-blue-600"><NavLink to="/adventure">Comedy</NavLink></DropdownItem>
                                <DropdownItem key="new" className="text-blue-600"><NavLink to="/adventure">History</NavLink></DropdownItem>
                                <DropdownItem key="new" className="text-blue-600"><NavLink to="/adventure">Crime</NavLink></DropdownItem>
                                {/* Add more genres here */}
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarBrand>
                </div>

                {/* Main Navbar Items (Hidden on mobile) */}
                <div className="hidden sm:flex gap-5">
                    <NavLink className="uppercase text-white font-extrabold">Movies</NavLink>
                    <NavLink className="uppercase text-white font-extrabold">About</NavLink>
                    <NavLink className="uppercase text-white font-extrabold">Contact</NavLink>
                </div>

                {/* Profile Icon */}
                <NavbarContent justify="end">
                    <NavLink>
                        <CgProfile className="w-10 h-10 text-bluishWhite mx-4" />
                    </NavLink>
                </NavbarContent>
            </div>

            {/* Mobile Menu (toggle visibility using JS) */}
            <div id="mobile-menu" className="hidden sm:hidden">
                <NavLink className="block text-white py-2">Movies</NavLink>
                <NavLink className="block text-white py-2">About</NavLink>
                <NavLink className="block text-white py-2">Contact</NavLink>
                <NavLink className="block text-white py-2">Genres</NavLink>
                {/* Add search bar here for mobile if necessary */}
            </div>
        </Navbar>
    );
}
