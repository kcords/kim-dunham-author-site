import classes from "./PageWrapper.module.css";

interface PageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return <main className={classes.contentBody}>{children}</main>;
};
