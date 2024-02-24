import { useQuery } from "@tanstack/react-query";
import { GAMES_ENDPOINT } from "../constants";
import APIClient from "../services/api-client";
import { Screenshot } from "../entities/Screenshot";

const useScreenshots = (gameId: string | number) => {
  const apiClient = new APIClient<Screenshot>(
    GAMES_ENDPOINT + `/${gameId}/screenshots`
  );

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;
