import { Awards } from "../../components/Sections/Awards";
import { HomeBio } from "../../components/Sections/HomeBio";
import { NewsletterSignup } from "../../components/Sections/NewsletterSignup/NewsletterSignup";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { Quote } from "../../components/Sections/Quote";
import { SectionWrapper } from "../../components/SectionWrapper";
import { SocialIconSize } from "../../consts";
import { Socials } from "../../components/Socials";

export const Home = () => {
  return (
    <PageWrapper>
      <HomeBio />
      <Awards />
      <Quote />
      <NewsletterSignup />
      <SectionWrapper
        backgroundColor={SectionWrapper.BackgroundColor.Transparent}
        paddingCollapse
      >
        <Socials size={SocialIconSize.Large} showLabels />
      </SectionWrapper>
    </PageWrapper>
  );
};
