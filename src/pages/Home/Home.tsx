import { Awards } from "../../components/Sections/Awards";
import { HomeBio } from "../../components/Sections/HomeBio";
import { NewsletterSignup } from "../../components/Sections/NewsletterSignup/NewsletterSignup";
import { Quote } from "../../components/Sections/Quote";
import { SocialIconSize } from "../../models";
import { Socials } from "../../components/Socials";
import classes from "./Home.module.css";

export const Home = () => {
  return (
    <main className={classes.contentBody}>
      <HomeBio />
      <Awards />
      <Quote />
      <NewsletterSignup />
      <Socials size={SocialIconSize.Large} showLabel />
    </main>
  );
};
