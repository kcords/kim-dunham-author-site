import { FunctionComponent, SVGProps } from "react";

export interface RouteItem {
  label: string;
  path: string;
  seq: number;
}

export type FormData = { [key: string]: string };

export interface SocialOption {
  label: string;
  url: string;
  icon: SocialIcon;
}

export type SocialName = string;

export type SocialIcon = FunctionComponent<SVGProps<SVGSVGElement>>;

export interface FeedItemsResponse {
  items: FeedItem[];
}

export interface FeedItem {
  title: string;
  pubDate: string;
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