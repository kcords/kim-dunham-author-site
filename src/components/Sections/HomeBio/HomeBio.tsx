import { NavLink } from "react-router-dom";
import { Photo } from "../../Photo";
import { about } from "../../../routes.ts";
import classes from "./HomeBio.module.css";
import { homeBio } from "../../../strings";
import kdunhamProfile from "../../../assets/images/kdunham_profile.jpg";

export const HomeBio = () => {
  return (
    <article className={classes.bioContainer}>
      <Photo
        src={kdunhamProfile}
        alt={homeBio.profileImgAlt}
        shape={Photo.Shape.Rounded}
      />
      <div className={classes.bioTextContainer}>
        <h2>{homeBio.heading}</h2>
        <p>{homeBio.welcomeMessage}</p>
        <NavLink to={about.path} className={classes.moreLinkBtn}>
          {homeBio.moreLinkLabel}
        </NavLink>
      </div>
    </article>
  );
};
