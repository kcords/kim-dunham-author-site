import { DAY_IN_MILLISECONDS } from "./consts";
import { ISODateString } from "./types";

export const compileClassList = (...args: string[]): string =>
  args
    .reduce(
      (classList, className) =>
        typeof className === "string" ? `${classList} ${className}` : classList,
      ""
    )
    .trim();

export const formatDateStr = (dateStr: ISODateString): string =>
  new Date(dateStr).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

export const getDiffFromIsoDate = (dateStr: ISODateString) => {
  const today = new Date();
  const comparisonDate = new Date(dateStr);

  const diffInYears = today.getFullYear() - comparisonDate.getFullYear();
  const diffInMonths = today.getMonth() - comparisonDate.getMonth();
  const diffInTime = today.getTime() - comparisonDate.getTime();
  const months = diffInYears * 12 + diffInMonths;
  const days = Math.floor(diffInTime / (1 * DAY_IN_MILLISECONDS));

  return { days, months, years: diffInYears };
};

export const getReleaseTextByDate = (releaseDateStr: ISODateString) => {
  const releaseDate = new Date(releaseDateStr);
  const releaseMonth = releaseDate.toLocaleString("default", { month: "long" });
  const releaseYear = releaseDate.getFullYear().toString();

  const { days, months, years } = getDiffFromIsoDate(releaseDateStr);

  if (months <= -6) return `Coming ${releaseYear}`;
  if (months <= -3) return `Coming ${releaseMonth} ${releaseYear}`;
  if (days < 0) {
    const daysFromRelease = Math.abs(days);
    const dayVariant = daysFromRelease === 1 ? "day" : "days";
    return `Coming in ${daysFromRelease} ${dayVariant}`;
  }
  if (years < 1) return "Available now";
  return `Published ${releaseMonth} ${releaseYear}`;
};
