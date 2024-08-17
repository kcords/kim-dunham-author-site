import auroraFinalist from "../../../assets/images/aurora_finalist_2024.png";
import classes from "./Awards.module.css";

export const Awards = () => {
  return (
    <aside>
      <figure>
        <img
          className={classes.img}
          src={auroraFinalist}
          height="200"
          width="200"
          alt="Realm Makers Aurora Finalist 2024"
        />
      </figure>
    </aside>
  );
};
