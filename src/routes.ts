import { RouteItem } from "./models";
import { navigation } from "./data/strings.json";

export const home: RouteItem = {
  label: navigation.home,
  path: "/",
};

export const books: RouteItem = {
  label: navigation.books,
  path: "/books",
};

export const newsletter: RouteItem = {
  label: navigation.newsletter,
  path: "/newsletter",
};

export const about: RouteItem = {
  label: navigation.about,
  path: "/about",
};

export const contact: RouteItem = {
  label: navigation.contact,
  path: "/contact",
};

export const routes = [home, books, newsletter, about, contact];
