import * as routes from "../../../routes.ts";

import { NavLink } from "react-router-dom";
import { RouteItem } from "../../../models.ts";
import classes from "./SiteNav.module.css";

const orderNavBySeq = (navA: RouteItem, navB: RouteItem) =>
  navA.seq > navB.seq ? 1 : -1;

export const SiteNav = () => {
  return (
    <nav>
      <ul className={classes.navList}>
        {Object.values(routes)
          .sort(orderNavBySeq)
          .map((route) => (
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
