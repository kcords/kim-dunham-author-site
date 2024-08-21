import { NavLink } from "react-router-dom";
import { about } from "../../../routes.ts";
import classes from "./HomeBio.module.css";
import { homeBio } from "../../../strings";
import kdunhamProfile from "../../../assets/images/kdunham_profile.jpg";

export const HomeBio = () => {
  return (
    <article className={classes.bioContainer}>
      <img
        className={classes.bioImg}
        src={kdunhamProfile}
        alt={homeBio.profileImgAlt}
      />
      <div className={classes.bioTextContainer}>
        <h2>{homeBio.heading}</h2>
        <p>{homeBio.aboutKimBody}</p>
        <NavLink
          to={about.path}
          className={classes.moreLinkBtn}
        >
          {homeBio.moreLinkLabel}
        </NavLink>
      </div>
    </article>
  );
};
