import { SocialIcon } from "../../socials";
import { SocialIconSize } from "../../consts";
import classes from "./Socials.module.css";

interface SocialButtonProps {
  label: string;
  url: string;
  icon: SocialIcon;
  size: SocialIconSize;
  showLabel?: boolean;
}

const getIconSize = (size: SocialIconSize) => {
  switch (size) {
    case SocialIconSize.Large:
      return "60px";
    case SocialIconSize.Small:
    default:
      return "30px";
  }
};

export const SocialButton = ({
  label,
  url,
  icon: Icon,
  size,
  showLabel,
}: SocialButtonProps) => {
  const sizeInPx = getIconSize(size);
  return (
    <button
      className={classes.socialsBtn}
      onClick={() => window.open(url, "_blank")}
    >
      <Icon
        className={classes.socialsIcon}
        aria-label={label}
        height={sizeInPx}
        width={sizeInPx}
      />
      {showLabel && <span className={classes.socialsLabel}>{label}</span>}
    </button>
  );
};
