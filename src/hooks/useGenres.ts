import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { CACHE_GENRES_KEY, GENRES_ENDPOINT } from "../constants";
import genres from "../data/genres";

interface Game {
  id: number;
  slug: string;
  name: string;
}

export interface Genre {
  games: Game[];
  id: number;
  image_background: string;
  name: string;
  slug: string;
}

//const useGenres = ()=>useData<Genre>('/genres');
const apiCLient = new APIClient<Genre>(GENRES_ENDPOINT);
const useGenres = () => {
  return useQuery({
    queryKey: CACHE_GENRES_KEY,
    queryFn: apiCLient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h,
    initialData: { count: genres.length, results: genres, next: null },
  });
};
// const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
