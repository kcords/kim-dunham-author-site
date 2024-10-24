import { books, shortStories } from "../../data/publications.json";

import { PageWrapper } from "../../components/PageWrapper";
import { PublicationContent } from "../../components/Sections/PublicationContent";
import classes from "./Books.module.css";

export const Books = () => {
  return (
    <PageWrapper>
      <h2 className={classes.heading}>Books</h2>
      {books.map((book) => (
        <PublicationContent publication={book} />
      ))}
      <h2 className={classes.heading}>Short Stories</h2>
      {shortStories.map((shortStory) => (
        <PublicationContent publication={shortStory} />
      ))}
    </PageWrapper>
  );
};
