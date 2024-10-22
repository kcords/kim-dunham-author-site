import { ContactForm } from "../../components/Sections/ContactForm/";
import { PageWrapper } from "../../components/PageWrapper";
import { SectionWrapper } from "../../components/SectionWrapper";
import { SocialIconSize } from "../../consts";
import { Socials } from "../../components/Socials";
import { contactForm } from "../../strings";

export const Contact = () => {
  return (
    <PageWrapper>
      <ContactForm />
      <SectionWrapper
        direction={SectionWrapper.Direction.Column}
        backgroundColor={SectionWrapper.BackgroundColor.Transparent}
        paddingCollapse
      >
        <Socials
          size={SocialIconSize.Large}
          headingText={contactForm.socialsSubheading}
          showLabels
        />
      </SectionWrapper>
    </PageWrapper>
  );
};
