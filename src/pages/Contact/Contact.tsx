import { ContactForm } from "../../components/Sections/ContactForm/";
import { PageWrapper } from "../../components/PageWrapper";
import { SectionWrapper } from "../../components/SectionWrapper";
import { SocialIconSize } from "../../consts";
import { Socials } from "../../components/Socials";
import classes from './Contact.module.css'
import { contactForm } from "@/data/strings.json";

export const Contact = () => {
  return (
    <PageWrapper noGapSmallScreen noPaddingBottomSmallScreen>
      <ContactForm />
      <SectionWrapper
        direction={SectionWrapper.Direction.Column}
        backgroundColor={SectionWrapper.BackgroundColor.Transparent}
        gap={SectionWrapper.Gap.Small}
        paddingCollapse
      >
        <h3 className={classes.socialsSubheading}>
          {contactForm.socialsSubheading}
        </h3>
        <Socials size={SocialIconSize.Large} showLabels />
      </SectionWrapper>
    </PageWrapper>
  );
};
