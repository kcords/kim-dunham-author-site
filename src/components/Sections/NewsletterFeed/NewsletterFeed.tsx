import {LoadingSpinner} from '../../LoadingSpinner/'
import { NewsletterFeedItem } from "./NewsletterFeedItem";
import classes from "./NewsletterFeed.module.css";
import { newsletter } from "../../../strings";
import { toast } from "react-toastify";
import { useGetFeedItems } from "../../../hooks/useGetFeedItems";

export const NewsletterFeed = () => {
  const { isLoading, isError, feedItems } = useGetFeedItems({
    onError: () => toast.error(newsletter.feedLoadError),
  });

  if (isLoading) return <LoadingSpinner />

  if (isError || feedItems.length < 1) return null;

  return (
    <div className={classes.feedContainer}>
      {feedItems.map((feedItem) => (
        <NewsletterFeedItem key={feedItem.guid} feedItem={feedItem} />
      ))}
    </div>
  );
};
