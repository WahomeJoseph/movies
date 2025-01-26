/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="flex w-full bg-[#030f0f] justify-between gap-2 px-8 items-center shadow-md shadow-[#030f0f] text-base sm:flex-row sm:mt-0 sm:justify-between sm:gap-4 md:flex-row sm:text-base">
            <span className="text-lg text-[#00df82] font-bold sm:text-xl md:text-lg">
                <Link to="/" className="italic uppercase">cinema</Link>
            </span>
            <div className="flex justify-between items-center gap-4 my-2 md:gap-4 md:p-4">
                <Link to="/" className="p-2 text-[#00df82] rounded-sm text-sm sm:text-base hover:shadow-[#00df82] hover:shadow-sm lg:p-4">Home</Link>
                <Link to="/favs" className="p-2 text-[#00df82] rounded-sm text-sm sm:text-base hover:shadow-[#00df82] hover:shadow-sm">Favorites</Link>
            </div>
        </nav>
    );
  }

  export default NavBar;
