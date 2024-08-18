import { Branding } from "./Branding";
import { SiteNav } from "./SiteNav";
import { Socials } from "../Socials/";
import classes from "./Header.module.css";
import { header } from "../../strings";

export const Header = () => {
  return (
    <header className={classes.header}>
      <Branding />
      <input type="checkbox" id="menu-toggle" className={classes.menuToggle} />
      <label htmlFor="menu-toggle" className={classes.menuIcon} tabIndex={0}>{header.menuBtnLabel}</label>
      <div className={classes.navContainer}>
        <SiteNav />
        <Socials />
      </div>
    </header>
  );
};
