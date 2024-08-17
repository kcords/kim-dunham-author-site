import { Branding } from "./Branding";
import { SiteNav } from "./SiteNav";
import { Socials } from "../Socials/";
import classes from "./Header.module.css";

export const Header = () => {
  return (
    <header className={classes.header}>
      <Branding />
      <div className={classes.navContainer}>
        <SiteNav />
        <Socials />
      </div>
    </header>
  );
};
