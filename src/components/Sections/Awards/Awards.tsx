import { SectionWrapper } from "../../SectionWrapper";
import auroraFinalist from "../../../assets/images/aurora_finalist_2024.png";
import classes from "./Awards.module.css";

export const Awards = () => {
  return (
    <SectionWrapper
      backgroundColor={SectionWrapper.BackgroundColor.Transparent}
      paddingCollapse
    >
      <figure>
        <img
          className={classes.img}
          src={auroraFinalist}
          height="200"
          width="200"
          alt="Realm Makers Aurora Finalist 2024"
        />
      </figure>
    </SectionWrapper>
  );
};
