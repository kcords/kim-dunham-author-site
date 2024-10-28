import {LoadingSpinner} from '../../LoadingSpinner/'
import { NewsletterFeedItem } from "./NewsletterFeedItem";
import { SectionWrapper } from "../../SectionWrapper";
import classes from "./NewsletterFeed.module.css";
import { newsletter } from "@/data/strings.json";
import { toast } from "react-toastify";
import { useGetFeedItems } from "../../../hooks/useGetFeedItems";

export const NewsletterFeed = () => {
  const { isLoading, isError, feedItems } = useGetFeedItems();

  if (isLoading) return <LoadingSpinner />;

  if (isError) {
    toast.error(newsletter.feedLoadError);
  }

  if (isError || feedItems.length < 1) {
    return null;
  }

  return (
    <SectionWrapper className={classes.feedContainer}>
      {feedItems.map((feedItem) => (
        <NewsletterFeedItem key={feedItem.guid} feedItem={feedItem} />
      ))}
    </SectionWrapper>
  );
};
