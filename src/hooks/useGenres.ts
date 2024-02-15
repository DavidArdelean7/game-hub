import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { CACHE_GENRES_KEY } from "../constants";
import { FetchResponse } from "../services/api-client";
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

const useGenres = () => {
  return useQuery({
    queryKey: CACHE_GENRES_KEY,
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h,
    initialData: { count: genres.length, results: genres },
  });
};
// const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
