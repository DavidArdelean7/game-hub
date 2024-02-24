import { useQuery } from "@tanstack/react-query";
import { CACHE_GAMES_KEY, GAMES_ENDPOINT } from "../constants";
import APIClient from "../services/api-client";
import Game from "../entities/Game";

const apiClient = new APIClient<Game>(GAMES_ENDPOINT);

const useGame = (slug: string) => {
  return useQuery({
    queryKey: [CACHE_GAMES_KEY, slug],
    queryFn: () => apiClient.get(slug),
  });
};

export default useGame;
