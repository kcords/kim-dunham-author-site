import { FunctionComponent, SVGProps } from "react";

import { ISODateString } from "./types";

export interface RouteItem {
  label: string;
  path: string;
}

export type FormData = { [key: string]: string };

export interface SocialOption {
  label: string;
  url: string;
  icon: SocialIcon;
}

export type SocialName = string;

export type SocialIcon = FunctionComponent<SVGProps<SVGSVGElement>>;

export interface FeedItem {
  title: string;
  pubDate: ISODateString;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: {
    link: string;
    type: string; //"image/jpeg";
  };
  categories: string[];
}

export type Publications = Record<"books" | "shortStories", PublicationDetails>;

export interface PublicationDetails {
  title: string;
  detail: string;
  release: ISODateString;
  publisher: string;
  logline: string;
  image?: Image;
}

export interface Image {
  path: string;
  description: string;
}
