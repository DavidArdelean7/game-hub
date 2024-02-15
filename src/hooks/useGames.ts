import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient from "../services/api-client";
import { Platform } from "./usePlatforms";
import { CACHE_PLATFORM_KEY, GAMES_ENDPOINT } from "../constants";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>(GAMES_ENDPOINT);
const useGames = (gameQuery: GameQuery) => {
  return useQuery({
    queryKey: [CACHE_PLATFORM_KEY, gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.order,
          search: gameQuery.search,
        },
      }),
  });
};
export default useGames;

// const useGames = (gameQuery: GameQuery) =>
//   useData<Game>(
//     "/games",
//     {
//       params: {
//         genres: gameQuery.genre?.id,
//         parent_platforms: gameQuery.platform?.id,
//         ordering: gameQuery.order,
//         search: gameQuery?.search,
//       },
//     },
//     [gameQuery]
//   );
