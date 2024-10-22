import { AboutContent } from "../../components/Sections/AboutContent";
import { PageWrapper } from "../../components/PageWrapper";
import { Photo } from "../../components/Photo";
import { about } from "../../strings";
import forestStump from "../../assets/images/forest_stump_square.jpg";
import kDunhamCoast from "../../assets/images/kdunham_oregon_coast_square.jpg";
import kodaWriting from "../../assets/images/k_koda_square.jpg";

export const About = () => {
  return (
    <PageWrapper noSmallScreenSectionGaps>
      <AboutContent heading={about.aboutHeading} text={about.aboutText}>
        <Photo
          src={kDunhamCoast}
          alt={about.aboutImgAlt}
          height="300"
          width="300"
          alignment={Photo.Align.Left}
        />
      </AboutContent>
      <AboutContent heading={about.forestsHeading} text={about.forestsText}>
        <Photo
          src={forestStump}
          alt={about.forestsImgAlt}
          height="300"
          width="300"
          alignment={Photo.Align.Right}
        />
      </AboutContent>
      <AboutContent heading={about.writingHeading} text={about.writingText}>
        <Photo
          src={kodaWriting}
          alt={about.writingImgAlt}
          height="300"
          width="300"
          alignment={Photo.Align.Left}
        />
      </AboutContent>
    </PageWrapper>
  );
};
