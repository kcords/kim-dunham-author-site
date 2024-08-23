import { AboutContent } from "../../components/Sections/AboutContent";
import { about } from "../../strings";
import classes from "./About.module.css";

export const About = () => {
  return (
    <main className={classes.contentBody}>
      <AboutContent heading={about.storiesHeading} text={about.storiesText} />
      <AboutContent heading={about.forestsHeading} text={about.forestsText} />
      <AboutContent heading={about.writingHeading} text={about.writingText} />
    </main>
  );
};
