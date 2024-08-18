import { SocialButton } from "./SocialButton";
import { SocialIconSize } from "../../models.ts";
import classes from "./Socials.module.css";
import { compileClassList } from "../../utils.ts";
import { socials } from "../../socials.ts";

interface SocialsProps {
  size?: SocialIconSize;
  showLabel?: boolean;
}

const getSocialsClassName = (size?: SocialIconSize) => {
  switch (size) {
    case SocialIconSize.Large:
      return compileClassList(classes.socialsList, classes.socialsListLg);
    case SocialIconSize.Small:
    default:
      return classes.socialsList;
  }
};

export const Socials = ({
  size = SocialIconSize.Small,
  showLabel,
}: SocialsProps) => {
  return (
    <ul className={getSocialsClassName(size)}>
      {Object.values(socials).map((social) => (
        <SocialButton
          key={social.url}
          label={social.label}
          url={social.url}
          icon={social.icon}
          size={size}
          showLabel={showLabel}
        />
      ))}
    </ul>
  );
};
