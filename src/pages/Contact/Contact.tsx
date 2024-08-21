import { ContactForm } from "../../components/Sections/ContactForm/";
import { SocialIconSize } from "../../consts";
import { Socials } from "../../components/Socials";
import classes from "./Contact.module.css";

export const Contact = () => {
  return (
    <main className={classes.contentBody}>
      <ContactForm />
      <Socials size={SocialIconSize.Large} showLabel />
    </main>
  );
};
