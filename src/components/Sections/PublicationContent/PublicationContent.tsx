import { Photo } from "../../Photo";
import { PublicationDetails } from "../../../models";
import { SectionWrapper } from "../../SectionWrapper";
import betwixtBookImage from "@/assets/images/betwixt_placeholder.png";
import classes from "./PublicationContent.module.css";
import { getReleaseTextByDate } from "../../../utils";

interface BookContentProps {
  publication: PublicationDetails;
}

export const PublicationContent = ({
  publication: { title, detail, release, logline, publisher, image },
}: BookContentProps) => {
  return (
    <SectionWrapper>
      {image ? (
        <Photo src={image.path} alt={image.description} width={"300px"} />
      ) : null}
      <div>
        <h2 className={classes.title}>{title}</h2>
        {detail ? <h3 className={classes.detail}>{detail}</h3> : null}
        <p className={classes.releaseBanner}>{getReleaseTextByDate(release)}</p>
        <p className={classes.logline}>{logline}</p>
        <p className={classes.publisher}>{publisher}</p>
      </div>
    </SectionWrapper>
  );
};
