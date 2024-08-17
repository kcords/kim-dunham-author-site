import { NavLink } from "react-router-dom";
import classes from "./SiteNav.module.css";

export const SiteNav = () => {
  return (
    <nav>
      <ul className={classes.navList}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.navListItemActive : classes.navListItem
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/newsletter"
            className={({ isActive }) =>
              isActive ? classes.navListItemActive : classes.navListItem
            }
          >
            Newsletter
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? classes.navListItemActive : classes.navListItem
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? classes.navListItemActive : classes.navListItem
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
