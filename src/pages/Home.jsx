/* eslint-disable no-unused-vars */
import React from "react";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../api/Api.js";

const Home = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setisLoading(false);
      }
    };

    loadPopularMovies(); // call the function
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    if (isLoading) return;

    setisLoading(true);
    try {
      const searchRes = await searchMovies(search);
      setMovies(searchRes);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies...");
    } finally {
      setisLoading(false);
    }
  };

  return (
    <div id="home" className="min-h-screen bg-[#030f0f] flex flex-col justify-center items-center text-white">
      <form onSubmit={handleSearch} className="max-w-full flex gap-4 px-4 md:px-10">
        <input
          type="text"
          placeholder="Search for your movies..."
          className="flex-2 p-3 rounded-sm bg-transparent shadow-sm shadow-[#00df82] text-[#00df82] text-base focus:outline focus:ring-[#00df82] focus:opacity-70"
          value={search}
          onChange={(e) => setSearch(e.target.value)}/>
        <button type="submit" className="p-3 px-6 bg-[#030f0f] shadow-sm shadow-[#00df82] text-white rounded font-medium  duration-200 whitespace-nowrap hover:shadow-md">
          Search
        </button>
      </form>

      {error && <div className="error-message text-red-500 text-center">{error}</div>}
      {isLoading ? (
        <div className="text-center text-white">Loading the movie...</div>
      ) : (
        <div className="grid gap-6 p-4 w-full box-border" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
