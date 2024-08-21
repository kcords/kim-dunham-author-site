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
