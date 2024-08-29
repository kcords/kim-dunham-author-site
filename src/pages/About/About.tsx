import { AboutContent } from "../../components/Sections/AboutContent";
import { Photo } from "../../components/Photo";
import { about } from "../../strings";
import classes from "./About.module.css";
import forestStump from "../../assets/images/forest_stump_square.jpg";
import kDunhamCoast from "../../assets/images/kdunham_oregon_coast_square.jpg";
import kodaWriting from "../../assets/images/k_koda_square.jpg";

export const About = () => {
  return (
    <main className={classes.contentBody}>
      <AboutContent heading={about.storiesHeading} text={about.storiesText}>
        <Photo
          src={kDunhamCoast}
          alt={""}
          height="300"
          width="300"
          alignment={Photo.Align.Left}
        />
      </AboutContent>
      <AboutContent heading={about.forestsHeading} text={about.forestsText}>
        <Photo
          src={forestStump}
          alt={""}
          height="300"
          width="300"
          alignment={Photo.Align.Right}
        />
      </AboutContent>
      <AboutContent heading={about.writingHeading} text={about.writingText}>
        <Photo
          src={kodaWriting}
          alt={""}
          height="300"
          width="300"
          alignment={Photo.Align.Left}
        />
      </AboutContent>
    </main>
  );
};
