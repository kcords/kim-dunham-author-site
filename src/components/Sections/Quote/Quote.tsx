import { SectionWrapper } from "../../SectionWrapper";
import classes from "./Quote.module.css";

export const Quote = () => {
  return (
    <SectionWrapper
      direction={SectionWrapper.Direction.Column}
      maxWidth={SectionWrapper.MaxWidth.Px600}
      gap={SectionWrapper.Gap.None}
    >
      <blockquote className={classes.quoteText}>
        "Fantasy remains a human right: we make in our measure and in our
        derivative mode, because we are made: and not only made, but made in the
        image and likeness of a Maker."
      </blockquote>
      <cite className={classes.quoteCitation}>
        — J.R.R. Tolkien, On Fairy-Stories
      </cite>
    </SectionWrapper>
  );
};
