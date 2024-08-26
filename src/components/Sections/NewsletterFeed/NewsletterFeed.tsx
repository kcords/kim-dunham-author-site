import { NewsletterFeedItem } from "./NewsletterFeedItem";
import classes from "./NewsletterFeed.module.css";
import { newsletter } from "../../../strings";
import { toast } from "react-toastify";
import { useGetFeedItems } from "../../../hooks/useGetFeedItems";

export const NewsletterFeed = () => {
  const { feedItems } = useGetFeedItems({
    onError: () => toast.error(newsletter.feedLoadError),
  });

  return (
    <div className={classes.feedContainer}>
      {feedItems.map((feedItem) => (
        <NewsletterFeedItem feedItem={feedItem} />
      ))}
    </div>
  );
};
