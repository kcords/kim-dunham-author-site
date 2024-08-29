import classes from "./Photo.module.css";
import { compileClassList } from "../../utils";

interface PhotoProps {
  src: string;
  alt: string;
  shape?: Shape;
  alignment?: Align;
  height?: string;
  width?: string;
}

enum Shape {
  Rounded = "rounded",
  Squared = "squared",
}

enum Align {
  Natural = "natural",
  Left = "left",
  Right = "right",
  FloatLeft = "float-left",
  FloatRight = "float-right",
}

const getShapeClass = (shape: Shape): string => {
  switch (shape) {
    case Shape.Rounded:
      return classes.rounded;
    case Shape.Squared:
    default:
      return classes.squared;
  }
};

const getAlignClass = (alignment: Align): string => {
  switch (alignment) {
    case Align.Left:
      return classes.alignLeft;
    case Align.Right:
      return classes.alignRight;
    case Align.Natural:
    default:
      return "";
  }
};

export const Photo = ({
  src,
  alt,
  shape = Shape.Squared,
  alignment = Align.Natural,
  height = "",
  width = "",
}: PhotoProps) => {
  const compiledClassName = compileClassList(
    classes.imgBase,
    getShapeClass(shape),
    getAlignClass(alignment)
  );
  return (
    <img
      className={compiledClassName}
      src={src}
      alt={alt}
      height={height}
      width={width}
    />
  );
};

Photo.Shape = Shape;
Photo.Align = Align;
