import { useQuery } from "@tanstack/react-query";
import { CACHE_PLATFORM_KEY } from "../constants";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

const usePlatforms = () => {
  return useQuery({
    queryKey: CACHE_PLATFORM_KEY,
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });
};
export default usePlatforms;