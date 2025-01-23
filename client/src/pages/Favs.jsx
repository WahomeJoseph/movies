/* eslint-disable no-unused-vars */
import React from "react";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

export const Favorites = () => {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="p-8 w-full box-border">
        <h2 className="mb-8 text-center text-4xl text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Your Favorites</h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} className="animate-fadeIn"/>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="text-center p-16 bg-white bg-opacity-5 rounded-xl m-8 max-w-lg mx-auto">
      <h2 className="mb-4 text-2xl text-red-600">No Favorite Movies Yet</h2>
      <p className="text-gray-400 text-xl leading-loose">Start adding movies to your favorites and they will appear here!</p>
    </div>
  );
}

