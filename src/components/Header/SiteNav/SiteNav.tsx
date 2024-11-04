import { MenuIcon } from "./MenuIcon";
import { SiteNavMenuItem } from "./SiteNavMenuItem";
import { Socials } from "@/components/Socials";
import classes from "./SiteNav.module.css";
import { routes } from "@/routes.ts";
import { useLocation } from "react-router-dom";

export const SiteNav = () => {
  const location = useLocation();

  return (
    <>
      <MenuIcon />
      <div className={classes.navContainer}>
        <nav>
          <ul className={classes.navList}>
            {routes.map((route) => (
              <SiteNavMenuItem
                key={route.label}
                route={route}
                location={location}
              />
            ))}
          </ul>
        </nav>
        <Socials />
      </div>
    </>
  );
};
