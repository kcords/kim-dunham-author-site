import { NavLink } from "react-router-dom";
import classes from "./SiteNav.module.css";
import { routes } from "../../../routes.ts";

export const SiteNav = () => {
  return (
    <nav>
      <ul className={classes.navList}>
        {routes.map((route) => (
          <li key={route.label}>
            <NavLink
              to={route.path}
              className={({ isActive }) =>
                isActive ? classes.navListItemActive : classes.navListItem
              }
            >
              {route.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
