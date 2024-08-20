import { SocialName, SocialOption } from "./models";

import GoodreadsIcon from "./assets/icons/icons8-goodreads.svg";
import InstagramIcon from "./assets/icons/icons8-instagram.svg";
import PinterestIcon from "./assets/icons/icons8-pinterest.svg";

type SocialsOptions = { [socialName: SocialName]: SocialOption };

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
