import classes from "./AboutContent.module.css";

interface AboutContentProps {
  heading: string;
  text: string;
  alignInsert?: AlignInsert;
  children?: React.ReactNode;
}

enum AlignInsert {
  Left = "left",
  Right = "right",
}

export const AboutContent = ({
  heading,
  text,
  alignInsert,
  children,
}: AboutContentProps) => {
  const showInsertRight = !!children && alignInsert === AlignInsert.Right;
  return (
    <article className={classes.sectionContainer}>
      {!showInsertRight ? children : null}
      <div className={classes.textContainer}>
        <h2 className={classes.heading}>{heading}</h2>
        {text.split("\n").map((p) => (
          <p key={p} className={classes.text}>
            {p}
          </p>
        ))}
      </div>
      {showInsertRight ? children : null}
    </article>
  );
};

AboutContent.AlignInsert = AlignInsert;