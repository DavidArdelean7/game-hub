import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { CACHE_GENRES_KEY, GENRES_ENDPOINT } from "../constants";
import genres from "../data/genres";
import ms from "ms";
import Genre from "../entities/Genre";

export interface Game {
  id: number;
  slug: string;
  name: string;
}

//const useGenres = ()=>useData<Genre>('/genres');
const apiCLient = new APIClient<Genre>(GENRES_ENDPOINT);
const useGenres = () => {
  return useQuery({
    queryKey: CACHE_GENRES_KEY,
    queryFn: apiCLient.getAll,
    staleTime: ms("1d"),
    initialData: { count: genres.length, results: genres, next: null },
  });
};
// const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
