import {
  DEV_KCORDELL_URL,
  ICONS8_URL,
  SVG_BACKGROUNDS_URL,
} from "../../externalUrls";

import classes from "./Footer.module.css";
import { footer } from "@/data/strings.json";

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div>{footer.copyright}</div>
      <div></div>
      <div>
        <ul className={classes.attributionList}>
          <li className={classes.attributionItem}>
            <a href={DEV_KCORDELL_URL}>{footer.siteDevAttribution}</a>
          </li>
          <li className={classes.attributionItem}>
            <a href={ICONS8_URL}>{footer.iconsAttribution}</a>
          </li>
          <li className={classes.attributionItem}>
            <a href={SVG_BACKGROUNDS_URL}>{footer.spinnerAttribution}</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
