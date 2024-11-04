import { Branding } from "./Branding";
import { SiteNav } from "./SiteNav";
import classes from "./Header.module.css";

export const Header = () => {
  return (
    <header className={classes.header}>
      <Branding />
      <SiteNav />
    </header>
  );
};
