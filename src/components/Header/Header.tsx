import { Branding } from "./Branding";
import { SiteNav } from "./SiteNav";
import { Socials } from "../Socials/";
import classes from "./Header.module.css";
import { header } from "../../strings";
import { useRef } from "react";
import { useUpdateMenuRefOnNav } from "../../hooks/useUpdateMenuRefOnNav";

export const Header = () => {
  const menuCheckboxRef = useRef(null);
  useUpdateMenuRefOnNav(menuCheckboxRef);

  return (
    <header className={classes.header}>
      <Branding />
      <input
        type="checkbox"
        id="menu-toggle"
        className={classes.menuToggle}
        ref={menuCheckboxRef}
        aria-label="Toggle menu"
      />
      <label htmlFor="menu-toggle" className={classes.menuIcon} tabIndex={0}>
      </label>
      <div className={classes.navContainer}>
        <SiteNav />
        <Socials />
      </div>
    </header>
  );
};
