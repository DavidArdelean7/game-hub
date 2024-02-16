import { QueryKey, useQuery } from "@tanstack/react-query";
import { CACHE_PLATFORM_KEY, PLATFORMS_ENDPOINT } from "../constants";
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}
const apiClient = new APIClient<Platform>(PLATFORMS_ENDPOINT);
const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: [CACHE_PLATFORM_KEY],
    queryFn: apiClient.getAll,
    staleTime: ms("1 day"),
    initialData: { count: platforms.length, results: platforms, next: null },
  });
};
export default usePlatforms;
// { count: platforms.length, results: platforms }
