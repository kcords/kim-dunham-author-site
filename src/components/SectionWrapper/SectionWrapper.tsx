import classes from "./SectionWrapper.module.css";
import { compileClassList } from "../../utils";

interface SectionBaseProps {
  backgroundColor?: BackgroundColor;
  direction?: Direction;
  alignItems?: AlignItems;
  maxWidth?: MaxWidth;
  gap?: Gap;
  paddingCollapse?: boolean;
  className?: string;
  children: React.ReactNode;
}

enum BackgroundColor {
  Primary = "backgroundColorPrimary",
  Transparent = "backgroundColorTransparent",
}

enum Direction {
  Row = "directionRow",
  Column = "directionColumn",
}

enum AlignItems {
  Center = "alignItemsCenter",
  Start = "alignItemsStart",
}

enum MaxWidth {
  None = "none",
  Px600 = "maxWidth600",
}

enum Gap {
  None = "none",
  Large = "gapLarge",
}

export const SectionWrapper = ({
  backgroundColor = BackgroundColor.Primary,
  direction = Direction.Row,
  alignItems = AlignItems.Center,
  maxWidth = MaxWidth.None,
  gap = Gap.Large,
  paddingCollapse = false,
  className = "",
  children,
}: SectionBaseProps) => {
  return (
    <article
      className={compileClassList(
        classes.sectionContainer,
        classes[backgroundColor],
        classes[direction],
        classes[alignItems],
        maxWidth !== MaxWidth.None ? classes[maxWidth] : "",
        gap !== Gap.None ? classes[gap] : "",
        paddingCollapse ? classes.paddingCollapse : "",
        className
      )}
    >
      {children}
    </article>
  );
};

SectionWrapper.BackgroundColor = BackgroundColor;
SectionWrapper.Direction = Direction;
SectionWrapper.AlignItems = AlignItems;
SectionWrapper.MaxWidth = MaxWidth;
SectionWrapper.Gap = Gap;
