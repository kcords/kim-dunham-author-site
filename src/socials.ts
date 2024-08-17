import { FunctionComponent, SVGProps } from "react";

import GoodreadsIcon from "./assets/icons/icons8-goodreads.svg";
import InstagramIcon from "./assets/icons/icons8-instagram.svg";
import PinterestIcon from "./assets/icons/icons8-pinterest.svg";

export type SocialName = string;
export type SocialIcon = FunctionComponent<SVGProps<SVGSVGElement>>;
type SocialsOptions = { [socialName: SocialName]: SocialOption };

export interface SocialOption {
  label: string;
  url: string;
  icon: SocialIcon;
}

export const socials: SocialsOptions = {
  instagram: {
    label: "Instagram",
    url: "https://www.instagram.com/k.dunham.writes",
    icon: InstagramIcon,
  },
  pinterest: {
    label: "Pinterest",
    url: "https://pin.it/63qKYeNRU",
    icon: PinterestIcon,
  },
  goodreads: {
    label: "Goodreads",
    url: "https://www.goodreads.com/user/show/91370604-kimberly-dunham",
    icon: GoodreadsIcon,
  },
};
