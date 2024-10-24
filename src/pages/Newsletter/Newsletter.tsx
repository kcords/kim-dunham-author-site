import { NewsletterFeed } from "../../components/Sections/NewsletterFeed";
import { NewsletterSignup } from "../../components/Sections/NewsletterSignup/NewsletterSignup";
import { PageWrapper } from "../../components/PageWrapper";

export const Newsletter = () => {
  return (
    <PageWrapper>
      <NewsletterSignup />
      <NewsletterFeed />
    </PageWrapper>
  );
};
