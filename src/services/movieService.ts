import axios from "axios";
const apiKey = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTM3NmFlMzc1OTAzYzlmYjY2Mjk3YTliZDM2YzE2MSIsIm5iZiI6MTc1MTk5OTgxOS44MjQsInN1YiI6IjY4NmQ2NTRiOTAwYTdiY2NjNGVkNWZkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NRcVj8POuaQoGo5hCwxqx9MzGwuq9xOLP1KNfJfrkIU;
import type { Movie } from "../types/movie";

interface MoviesHTTPResponse {
  results: Movie[];
}

const fetchMovies = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

export default async function fetchMoviesByQuery(query:string): Promise<Movie[]> {
        const response = await fetchMovies.get<MoviesHTTPResponse>(
        `/search/movie`,
        {
          params: {
            query,
          },
        }
  );
  
  return response.data.results;
}   
