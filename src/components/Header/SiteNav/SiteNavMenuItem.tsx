import { Location, NavLink } from "react-router-dom";

import { RouteItem } from "@/models";
import classes from "./SiteNav.module.css";

interface SiteNavLinkProps {
  route: RouteItem;
  location?: Location;
}

export const SiteNavMenuItem = ({ route }: SiteNavLinkProps) => {
  return (
    <li>
      <NavLink
        to={route.path}
        className={({ isActive }) =>
          isActive ? classes.navListItemActive : classes.navListItem
        }
      >
        {route.label}
      </NavLink>
    </li>
  );
};