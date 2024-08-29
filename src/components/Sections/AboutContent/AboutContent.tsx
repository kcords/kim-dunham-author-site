import classes from "./AboutContent.module.css";

interface AboutContentProps {
  heading: string;
  text: string;
  children?: React.ReactNode;
}

export const AboutContent = ({ heading, text, children }: AboutContentProps) => {
  return (
    <article className={classes.sectionContainer}>
      {children}
      <div className={classes.textContainer}>
        <h2 className={classes.heading}>{heading}</h2>
        {text.split("\n").map((p) => (
          <p key={p} className={classes.text}>
            {p}
          </p>
        ))}
      </div>
    </article>
  );
};
