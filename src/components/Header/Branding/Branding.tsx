import KDunhamLogo from "../../../assets/images/kdunham-logo.svg";
import classes from "./Branding.module.css";

export const Branding = () => {
  return (
    <div className={classes.brandingContainer}>
      <KDunhamLogo
        height="175"
        width="175"
        aria-label="Open book with feather quill logo"
      />
      <div className={classes.brandingTextContainer}>
        <h1 className={classes.brandingTitle}>Kimberly Dunham</h1>
        <p className={classes.brandingSubtext}>YA dark forest fantasy author</p>
      </div>
    </div>
  );
};
