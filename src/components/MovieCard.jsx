/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { useMovieContext } from "../context/MovieContext";
import { FaHeart } from "react-icons/fa";

 const MovieCard = ({movie}) => {
  const { isFavorite, addToFavs, removeFromFavs } = useMovieContext()
  const favorite = isFavorite(movie.id);

  function handleFavs(e) {
    e.preventDefault();
    console.log('Fav Added', favorite, movie.id);
    if (favorite) removeFromFavs(movie.id);
    else addToFavs(movie);
  }

  return (
    <div id="movie" className="relative rounded-lg shadow-sm shadow-[#00df82] overflow-hidden bg-[#1a1a1a] transition-transform duration-200 h-full flex flex-col hover:translate-y-[-5px]">
      <div id="movieposter" className="relative aspect-[2/3] w-full">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full object-cover"/>
        <div id="moverlay" className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80 opacity-0 transition-opacity duration-200 flex flex-col justify-end p-6 hover:opacity-100">
          <button onClick={handleFavs} className={`${favorite ? 'active text-red-500' : 'text-[#fffff]'} absolute top-4 right-4 text-white text-xl p-2 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#030f0f]`}>
            <FaHeart/>
          </button>
        </div>
      </div>

      <div id="minfo" className="p-4 flex-1 flex flex-col gap-2 md:p-3">
        <h3 className="text-lg md:text-base">{movie.title}</h3>
        <span className="text-gray-600 text-sm">{movie.release_date?.split("-")[0]}</span>
      </div>
    </div>
)};

export default MovieCard

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
  }).isRequired,
};

