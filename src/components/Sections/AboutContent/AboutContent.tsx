import classes from "./AboutContent.module.css";

interface AboutContentProps {
  heading: string;
  text: string;
}

export const AboutContent = ({ heading, text }: AboutContentProps) => {
  return (
    <div className={classes.sectionContainer}>
      <h2 className={classes.heading}>{heading}</h2>
      {text.split("\n").map((p) => (
        <p key={p} className={classes.text}>
          {p}
        </p>
      ))}
    </div>
  );
};
