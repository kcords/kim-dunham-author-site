import { RouteItem } from "./models";
import { navigation } from "./strings";

export const home: RouteItem = {
  label: navigation.home,
  path: "/",
  seq: 1,
};

export const newsletter: RouteItem = {
  label: navigation.newsletter,
  path: "/newsletter",
  seq: 2,
};

export const about: RouteItem = {
  label: navigation.about,
  path: "/about",
  seq: 3,
};

export const contact: RouteItem = {
  label: navigation.contact,
  path: "/contact",
  seq: 4,
};
