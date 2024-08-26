import { FeedItemsResponse } from "./models";
import axios from "axios";

const { VITE_SUBSTACK_API = "", VITE_SUBSTACK_PROFILE_DOMAIN = "" } =
  import.meta.env;

const FETCH_FEED_ENDPOINT = "/.netlify/functions/fetch-feed";

export const addNewSubscriber = (email: string) =>
  axios.post(
    VITE_SUBSTACK_API,
    { email, domain: VITE_SUBSTACK_PROFILE_DOMAIN },
    { headers: { "Content-Type": "application/json" } }
  );

export const fetchFeedItems = async (): Promise<FeedItemsResponse> => {
  const { data } = await axios.get(FETCH_FEED_ENDPOINT);
  return data?.items || [];
};
