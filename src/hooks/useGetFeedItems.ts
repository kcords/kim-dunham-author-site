import { FeedItem } from "../models";
import { fetchFeedItems } from "../api";
import { useEffect } from "react";
import { useState } from "react";

interface UseGetFeedItemsProps {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export const useGetFeedItems = ({
  onSuccess,
  onError,
}: UseGetFeedItemsProps = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [feedItems, setFeedItems] = useState<FeedItem[]>([]);

  useEffect(() => {
    const beginFetchFeedItems = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const feedItemsResponse = await fetchFeedItems();
        setFeedItems(feedItemsResponse || []);
        onSuccess?.();
      } catch (error) {
        setIsError(true);
        onError?.(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    if (feedItems.length < 1) beginFetchFeedItems();
  }, [feedItems, onError, onSuccess]);
  return { isLoading, isError, feedItems };
};
