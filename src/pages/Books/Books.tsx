import { books, shortStories } from "../../data/publications.json";

import { PageWrapper } from "../../components/PageWrapper";
import { PublicationContent } from "../../components/Sections/PublicationContent";
import { PublicationDetails } from "../../models";
import classes from "./Books.module.css";

const booksTyped = books as PublicationDetails[];
const shortStoriesTyped = shortStories as PublicationDetails[];

export const Books = () => {
  return (
    <PageWrapper noPaddingBottomSmallScreen>
      <h2 className={classes.heading}>Books</h2>
      {booksTyped.map((book) => (
        <PublicationContent publication={book} />
      ))}
      <h2 className={classes.heading}>Short Stories</h2>
      {shortStoriesTyped.map((shortStory) => (
        <PublicationContent publication={shortStory} />
      ))}
    </PageWrapper>
  );
};
