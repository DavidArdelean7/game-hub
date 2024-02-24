import { useQuery } from "@tanstack/react-query";
import { GAMES_ENDPOINT } from "../constants";
import APIClient from "../services/api-client";
import { Trailers } from "../entities/Trailers";

const useTrailers = (gameId: string | number) => {
  const apiClient = new APIClient<Trailers>(
    GAMES_ENDPOINT + `/${gameId}/movies`
  );
  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;
