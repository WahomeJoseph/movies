/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="w-full bg-[#030f0f] flex justify-between gap-2 px-20 items-center shadow-md shadow-[#030f0f] text-base sm:flex-row sm:gap-4 md:flex-row sm:text-base">
            <span className="text-xl text-[#00df82] font-bold md:text-lg">
                <Link to="/">cinema</Link>
            </span>
            <div className="flex justify-between items-center gap-4 my-2 md:gap-4 md:p-4">
                <Link to="/" className="text-base p-2 text-[#00df82] rounded-sm hover:shadow-[#00df82] hover:shadow-sm lg:p-4">Home</Link>
                <Link to="/favs" className="text-base p-2 text-[#00df82] rounded-sm hover:shadow-[#00df82] hover:shadow-sm">Favorites</Link>
            </div>
        </nav>
    );
  }

  export default NavBar;
