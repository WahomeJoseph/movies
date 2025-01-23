/* eslint-disable no-unused-vars */
import React from "react";
import { MovieCard } from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../api/Api";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
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

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (isLoading) return;

    setisLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies...");
    } finally {
      setisLoading(false);
    }
  };

  return (
    <div className="home px-4 md:px-0 py-8 box-border">
      <form onSubmit={handleSearch} className="search-form max-w-xl mx-auto mb-8 flex gap-4 px-4 md:px-0 box-border">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input flex-1 p-3 border-none rounded bg-gray-800 text-white text-base focus:outline-none focus:shadow-outline-gray"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button p-3 px-6 bg-red-700 text-white rounded font-medium transition-colors duration-200 whitespace-nowrap hover:bg-red-600">
          Search
        </button>
      </form>

      {error && <div className="error-message text-red-500 text-center">{error}</div>}

      {isLoading ? (
        <div className="loading text-center text-white">Loading...</div>
      ) : (
        <div className="movies-grid grid gap-6 p-4 w-full box-border" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
