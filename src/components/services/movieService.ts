import axios from "axios";
const apiKey = import.meta.env.VITE_TMDB_TOKEN;

const fetchMovies = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

export default fetchMovies;