import classes from "./Photo.module.css";
import { compileClassList } from "../../utils";

interface PhotoProps {
  src: string;
  alt: string;
  shape?: Shape;
  height?: string;
  width?: string;
}

enum Shape {
  Rounded = "rounded",
  Squared = "squared",
}

export const Photo = ({
  src,
  alt,
  shape = Shape.Squared,
  height = "",
  width = "",
}: PhotoProps) => {
  const className = compileClassList(
    classes.imgBase,
    shape === Shape.Rounded ? classes.rounded : ""
  );
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      height={height}
      width={width}
    />
  );
};

Photo.Shape = Shape;
