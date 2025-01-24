/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="bg-black p-4 flex justify-between items-center shadow-md shadow-[#cccccc]  md:p-2 md:flex sm:text-base">
            <span className="text-xl font-bold md:text-lg">
                <Link to="/">cinema</Link>
            </span>
            <div className="flex items-center gap-8 md:gap-4 md:p-4">
                <Link to="/" className="text-base p-2 rounded duration-200 hover:bg-white/10">Home</Link>
                <Link to="/favorites" className="text-base p-2 rounded duration-200 hover:bg-white/10">Favorites</Link>
            </div>
        </nav>
    );
  }

  export default NavBar;
