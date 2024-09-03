import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Dropdown, Link, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import logo from '/images/logo.png'
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

export default function App() {
    return (
        // <Navbar className="bg-NavBG">
        //     <NavLink to="/" className="justify-start">
        //         <img src={logo} alt="" width="260px" />
        //     </NavLink>

        //     {/* Search Bar */}

        //     <form class="form relative">
        //         <button class="absolute left-2 -translate-y-1/2 top-1/2 p-1">
        //             <svg
        //                 width="17"
        //                 height="16"
        //                 fill="none"
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 role="img"
        //                 aria-labelledby="search"
        //                 class="w-5 h-5 text-gray-700"
        //             >
        //                 <path
        //                     d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
        //                     stroke="currentColor"
        //                     stroke-width="1.333"
        //                     stroke-linecap="round"
        //                     stroke-linejoin="round"
        //                 ></path>
        //             </svg>
        //         </button>
        //         <input
        //             class="input rounded-full px-8 py-2.5 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md bg-main max-w-full"
        //             placeholder="Search Movies..."
        //             required=""
        //             type="text"
        //         />
        //         <button type="reset" class="absolute right-3 -translate-y-1/2 top-1/2 p-1">
        //             <svg
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 class="w-5 h-5 text-gray-700"
        //                 fill="none"
        //                 viewBox="0 0 24 24"
        //                 stroke="currentColor"
        //             >
        //                 <path
        //                     stroke-linecap="round"
        //                     stroke-linejoin="round"
        //                     d="M6 18L18 6M6 6l12 12"
        //                 ></path>
        //             </svg>
        //         </button>
        //     </form>

        //     {/* Dropdown */}
        //     <NavbarBrand>
        //     <Dropdown backdrop="blur" className="bg-NavBG">
        //         <DropdownTrigger>
        //             <Button
        //                 variant="outline"
        //                 className="text-white uppercase"                    >
        //                 Genre
        //             </Button>
        //         </DropdownTrigger>
        //         <DropdownMenu variant="faded" aria-label="Static Actions">
        //             <DropdownItem key="new" className="text-blue-600 "><NavLink to="/adventure">Adventure</NavLink></DropdownItem>
        //             <DropdownItem key="new" className="text-blue-600 "><NavLink to="/adventure">Suspense</NavLink></DropdownItem>
        //             <DropdownItem key="new" className="text-blue-600 "><NavLink to="/adventure">Thriller</NavLink></DropdownItem>
        //             <DropdownItem key="new" className="text-blue-600 "><NavLink to="/adventure">Horror</NavLink></DropdownItem>
        //             <DropdownItem key="new" className="text-blue-600 "><NavLink to="/adventure">Drama</NavLink></DropdownItem>
        //             <DropdownItem key="new" className="text-blue-600 "><NavLink to="/adventure">History</NavLink></DropdownItem>
        //             <DropdownItem key="new" className="text-blue-600 "><NavLink to="/adventure">Comedy</NavLink></DropdownItem>
        //             <DropdownItem key="new" className="text-blue-600 "><NavLink to="/adventure">Sci-Fi</NavLink></DropdownItem>
        //             <DropdownItem key="new" className="text-blue-600 "><NavLink to="/adventure">Anime</NavLink></DropdownItem>

        //         </DropdownMenu>
        //     </Dropdown>
        //     </NavbarBrand>


        //     <NavbarContent className="hidden sm:flex gap-5" justify="center" >
        //         <NavbarItem>
        //             <NavLink className="uppercase text-white">
        //                 Movies
        //             </NavLink>
        //         </NavbarItem>
        //         <NavbarItem isActive>
        //             <NavLink  aria-current="page" className="uppercase text-white">
        //                 About
        //             </NavLink>
        //         </NavbarItem>
        //         <NavbarItem>
        //             <NavLink color="foreground" className="uppercase text-white" >
        //                 Contact
        //             </NavLink>
        //         </NavbarItem>
        //     </NavbarContent>
        //     <NavbarContent justify="end">
        //         <NavLink>
        //         <CgProfile className="w-10 h-10 text-bluishWhite"/>
        //         </NavLink>
        //     </NavbarContent>
        // </Navbar>

        <Navbar className="bg-NavBG">
            <NavbarBrand>
                <p className="font-bold text-inherit">ACME</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
