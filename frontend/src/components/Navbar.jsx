import {Link, useNavigate, NavLink} from "react-router-dom";
import {Logo} from "./Logo.jsx";


import React from 'react'



export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/">

                                <Logo/>
                            </Link>
                        </div>
                        <div className="hidden md:flex md:ml-6 md:space-x-8">
                            <NavLink

                                to="/"
                                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"

                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/"
                                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"

                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/"
                                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"

                            >
                                Contact
                            </NavLink>
                        </div>
                    </div>
                    <div className="hidden md:flex md:items-center">
                        <NavLink
                            to="/register"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                            Sign Up
                        </NavLink>
                        <NavLink
                            to="/login"
                            className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-50"
                        >
                            Login
                        </NavLink>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavLink

                            to="/"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"

                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"

                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"

                        >
                            Contact
                        </NavLink>
                        <NavLink
                            to="/register"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
                        >
                            Sign Up
                        </NavLink>
                        <NavLink
                            to="/login"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
                        >
                            Login
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    )
}

// export function Navbar() {
//     return (
//         <>
//             <Link to={"/"}>Home</Link>
//             <Link to={"/register"}>Register</Link>
//             <Link to={"/login"}>Login</Link>
//         </>
//     )
// }