import { NewsletterFeed } from "../../components/Sections/NewsletterFeed";
import { NewsletterSignup } from "../../components/Sections/NewsletterSignup/NewsletterSignup";
import classes from "./Newsletter.module.css";

export const Newsletter = () => {
  return (
    <main className={classes.contentBody}>
      <NewsletterSignup />
      <NewsletterFeed />
    </main>
  );
};
