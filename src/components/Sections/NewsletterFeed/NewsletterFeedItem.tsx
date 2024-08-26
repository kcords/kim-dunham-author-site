import { FeedItem } from "../../../models";
import { Photo } from "../../Photo";
import classes from "./NewsletterFeed.module.css";
import { formatDateStr } from "../../../utils";

export const NewsletterFeedItem = ({ feedItem }: { feedItem: FeedItem }) => {
  return (
    <div className={classes.feedItem}>
      <Photo
        src={feedItem.enclosure.link}
        alt={feedItem.title}
        width="200"
        height="200"
      />
      <h3 className={classes.title}>
        <a href={feedItem.link}>{feedItem.title}</a>
      </h3>
      <p className={classes.description}>{feedItem.description}</p>
      <p className={classes.date}>{formatDateStr(feedItem.pubDate)}</p>
    </div>
  );
};
