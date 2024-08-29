import { FeedItem } from "../../../models";
import { Photo } from "../../Photo";
import classes from "./NewsletterFeed.module.css";
import { formatDateStr } from "../../../utils";

export const NewsletterFeedItem = ({ feedItem }: { feedItem: FeedItem }) => {
  const handleOnClick = () => {
    window.open(feedItem.link, '_self')
  }

  return (
    <div className={classes.feedItem} onClick={handleOnClick}>
      <Photo
        src={feedItem.enclosure.link}
        alt={feedItem.title}
        width="200"
        height="200"
      />
      <h3 className={classes.title}>
        {feedItem.title}
        {/* <a href={feedItem.link}>{feedItem.title}</a> */}
      </h3>
      <p className={classes.description}>{feedItem.description}</p>
      <p className={classes.date}>{formatDateStr(feedItem.pubDate)}</p>
    </div>
  );
};
