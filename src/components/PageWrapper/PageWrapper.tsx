import classes from "./PageWrapper.module.css";
import { compileClassList } from "../../utils";

interface PageWrapperProps {
  noPaddingTopSmallScreen?: boolean;
  noPaddingBottomSmallScreen?: boolean;
  noGapSmallScreen?: boolean;
  children: React.ReactNode;
}

export const PageWrapper = ({
  noPaddingTopSmallScreen,
  noPaddingBottomSmallScreen,
  noGapSmallScreen,
  children,
}: PageWrapperProps) => {
  return (
    <main
      className={compileClassList(
        classes.contentBody,
        noGapSmallScreen && classes.noSectionSpacing,
        noPaddingTopSmallScreen && classes.noPaddingTop,
        noPaddingBottomSmallScreen && classes.noPaddingBottom
      )}
    >
      {children}
    </main>
  );
};
