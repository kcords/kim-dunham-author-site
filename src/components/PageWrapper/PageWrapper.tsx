import classes from "./PageWrapper.module.css";
import { compileClassList } from "../../utils";

interface PageWrapperProps {
  noSmallScreenSectionGaps?: boolean;
  children: React.ReactNode;
}

export const PageWrapper = ({ noSmallScreenSectionGaps, children }: PageWrapperProps) => {
  return (
    <main
      className={compileClassList(
        classes.contentBody,
        noSmallScreenSectionGaps ? classes.noSectionSpacing : ""
      )}
    >
      {children}
    </main>
  );
};
