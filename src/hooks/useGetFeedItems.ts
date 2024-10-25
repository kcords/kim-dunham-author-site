import { fetchFeedItems } from "../api";
import { useQuery } from "@tanstack/react-query";

export const useGetFeedItems = () => {
  const {
    isLoading,
    isError,
    data: feedItems,
  } = useQuery({
    queryKey: ["get-newsletter-feed-items"],
    queryFn: fetchFeedItems,
    initialData: [],
  });

  return { isLoading, isError, feedItems };
};
