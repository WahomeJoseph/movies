/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="bg-black p-4 md:p-2 flex justify-between items-center shadow-md">
            <div className="text-xl font-bold md:text-lg">
                <Link to="/">Cinema</Link>
            </div>
            <div className="flex gap-8 md:gap-4">
                <Link to="/" className="text-base p-2 rounded transition-colors duration-200 hover:bg-white/10">Home</Link>
                <Link to="/favorites" className="text-base p-2 rounded transition-colors duration-200 hover:bg-white/10">Favorites</Link>
            </div>
        </nav>
    );
  }

  export default NavBar;
