const API_KEY = "992cd58ef9941f9e928ced1063937796";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`); //make a request to the API
  const data = await response.json(); //parse the response to JSON
  return data.results; //return the movies results
};

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`) //make a request to the API`
  const data = await response.json();
  return data.results;
};