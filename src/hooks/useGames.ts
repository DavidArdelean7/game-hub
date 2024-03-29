import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { CACHE_GAMES_KEY, GAMES_ENDPOINT } from "../constants";
import useGameQueryStore from "../gameQueryStore";
import APIClient, { FetchResponse } from "../services/api-client";
import Game from "../entities/Game";

const apiClient = new APIClient<Game>(GAMES_ENDPOINT);

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [CACHE_GAMES_KEY, gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.order,
          search: gameQuery.search,
          page: pageParam,
        },
      }),
    staleTime: ms("1 day"),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
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
