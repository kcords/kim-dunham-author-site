import KDunhamLogo from "../../../assets/images/kdunham-logo.svg";
import classes from "./Branding.module.css";
import { header } from "@/data/strings.json";

export const Branding = () => {
  return (
    <div className={classes.brandingContainer}>
      <KDunhamLogo
        height="175"
        width="175"
        aria-label="Open book with feather quill logo"
      />
      <div className={classes.brandingTextContainer}>
        <h1 className={classes.brandingTitle}>{header.title}</h1>
        <p className={classes.brandingSubtext}>{header.subtext}</p>
      </div>
    </div>
  );
};
