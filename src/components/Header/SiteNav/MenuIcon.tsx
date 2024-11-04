import classes from "./SiteNav.module.css";
import { useRef } from "react";
import { useUpdateMenuRefOnNav } from "@/hooks/useUpdateMenuRefOnNav";

export const MenuIcon = () => {
  //used to uncheck checkbox state on navigation
  const menuCheckboxRef = useRef(null);
  useUpdateMenuRefOnNav(menuCheckboxRef);

  return (
    <>
      <input
        type="checkbox"
        id="menu-toggle"
        className={classes.menuToggle}
        ref={menuCheckboxRef}
        aria-label="Toggle menu"
      />
      <label
        htmlFor="menu-toggle"
        className={classes.menuIcon}
        tabIndex={0}
      ></label>
    </>
  );
};
