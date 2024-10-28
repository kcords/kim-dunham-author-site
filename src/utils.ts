import { ISODateString, MaybeFalse } from "./types";

import { differenceInCalendarDays } from "date-fns/differenceInCalendarDays";
import { differenceInMonths } from "date-fns/differenceInMonths";
import { differenceInYears } from "date-fns/differenceInYears";
import { format } from "date-fns/format";
import { parseISO } from "date-fns/parseISO";

export const compileClassList = (...args: MaybeFalse<string>[]): string =>
  args
    .filter((className): className is string => typeof className === "string")
    .reduce(
      (compiledClasses, nextClass) => `${compiledClasses} ${nextClass}`,
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

export const getDiffFromIsoDate = (dateStr: string) => {
  const today = new Date();
  const comparisonDate = parseISO(dateStr);

  const diffInDays = differenceInCalendarDays(today, comparisonDate);
  const diffInMonths = differenceInMonths(today, comparisonDate);
  const diffInYears = differenceInYears(today, comparisonDate);

  return { days: diffInDays, months: diffInMonths, years: diffInYears };
};

export const getReleaseTextByDate = (releaseDate: string) => {
  const releaseMonth = format(releaseDate, "LLLL");
  const releaseYear = format(releaseDate, "y");

  const { days, months, years } = getDiffFromIsoDate(releaseDate);

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
