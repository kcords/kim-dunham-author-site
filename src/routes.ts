import { RouteItem } from "./models";
import { navigation } from "./strings";

const home: RouteItem = {
  label: navigation.home,
  path: "/",
};

const books: RouteItem = {
  label: navigation.books,
  path: "/books",
};

const newsletter: RouteItem = {
  label: navigation.newsletter,
  path: "/newsletter",
};

export const about: RouteItem = {
  label: navigation.about,
  path: "/about",
};

const contact: RouteItem = {
  label: navigation.contact,
  path: "/contact",
};

export const routes = [home, books, newsletter, about, contact];
