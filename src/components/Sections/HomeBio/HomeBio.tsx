import { NavLink } from "react-router-dom";
import { Photo } from "../../Photo";
import { SectionWrapper } from "../../SectionWrapper";
import { books } from "../../../routes.ts";
import classes from "./HomeBio.module.css";
import { homeBio } from "@/data/strings.json";
import kdunhamProfile from "../../../assets/images/kdunham_profile.png";

export const HomeBio = () => {
  return (
    <SectionWrapper>
      <Photo
        src={kdunhamProfile}
        alt={homeBio.profileImgAlt}
        shape={Photo.Shape.Rounded}
        height="280"
        width="280"
      />
      <div className={classes.bioTextContainer}>
        <h2>{homeBio.heading}</h2>
        <p>{homeBio.welcomeMessage}</p>
        <NavLink to={books.path} className={classes.linkBtn}>
          {homeBio.booksLinkLabel}
        </NavLink>
      </div>
    </SectionWrapper>
  );
};
