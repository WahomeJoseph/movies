/* eslint-disable no-unused-vars */
import React from "react";
import { useMovieContext } from "../context/MovieContext.jsx";
import MovieCard from "../components/MovieCard.jsx";

export const Favorites = () => {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div id="favs" className="p-8 w-full box-border">
        <h2 className="mb-8 text-center text-4xl text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>My Likings</h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} className="animate-fadeIn"/>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#030f0f] text-center p-16 bg-opacity-5 p-4 rounded-lg shadow-sm m-8 max-w-lg mx-auto">
      <h2 className="mb-4 text-2xl text-red-600">No Favorite Movies Yet</h2>
      <p className="text-[#00df82] text-xl leading-loose">Choose movies to add to your favourites and watch later!</p>
    </div>
  );
}

