import { SectionWrapper } from "../../SectionWrapper";
import classes from "./AboutContent.module.css";

interface AboutContentProps {
  heading: string;
  text: string;
  children?: React.ReactNode;
}

export const AboutContent = ({
  heading,
  text,
  children,
}: AboutContentProps) => {
  return (
    <SectionWrapper alignItems={SectionWrapper.AlignItems.Start}>
      {children}
      <div className={classes.textContainer}>
        <h2 className={classes.heading}>{heading}</h2>
        {text.split("\n").map((p) => (
          <p key={p} className={classes.text}>
            {p}
          </p>
        ))}
      </div>
    </SectionWrapper>
  );
};
