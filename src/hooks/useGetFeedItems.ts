import { HOUR_IN_MILLISECONDS, MINUTE_IN_MILLISECONDS } from "../consts";

import { fetchFeedItems } from "../api";
import { useQuery } from "@tanstack/react-query";

const TIME_TO_STALE = 20 * MINUTE_IN_MILLISECONDS;
const TIME_TO_GARBAGE_COLLECT = 1 * HOUR_IN_MILLISECONDS;

export const useGetFeedItems = () => {
  const {
    isLoading,
    isError,
    data: feedItems,
  } = useQuery({
    queryKey: ["get-newsletter-feed-items"],
    queryFn: fetchFeedItems,
    staleTime: TIME_TO_STALE,
    gcTime: TIME_TO_GARBAGE_COLLECT,
  });

  return { isLoading, isError, feedItems };
};
