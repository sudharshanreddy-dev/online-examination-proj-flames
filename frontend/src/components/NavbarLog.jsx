import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {Logo} from "./Logo.jsx";
import {UserContext} from "../../context/userContext.jsx";

export const NavbarLog = () => {


    const { logout } = useContext(UserContext);

    const handleLogout = () => {
        logout();
    };
    return (
        <nav className="bg-gray-200 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-xl font-bold">
                    <Logo/>
                </div>
                <div className="flex space-x-4">
                    <Link to="/dashboard" className="text-black hover:text-gray-400">Dashboard</Link>

                </div>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                    Logout
                </button>
            </div>
        </nav>
    );
};
