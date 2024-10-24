export const compileClassList = (...args: string[]): string =>
  args
    .reduce(
      (classList, className) =>
        typeof className === "string" ? `${classList} ${className}` : classList,
      ""
    )
    .trim();

export const formatDateStr = (dateStr: string): string =>
  new Date(dateStr.replace(" ", "T")).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

export const getReleaseTextByDate = (dateStr: string) => {
  const releaseDate = new Date(dateStr);
  const today = new Date();
  const oneYearAhead = new Date(today);
  oneYearAhead.setFullYear(today.getFullYear() + 1);

  if (releaseDate <= today) return `Published ${releaseDate.getFullYear()}`;

  if (releaseDate > oneYearAhead) {
    const month = releaseDate.toLocaleString("default", { month: "long" });
    return `Coming ${month} ${releaseDate.getFullYear()}`;
  }

  const diffInTime = releaseDate.getTime() - today.getTime();
  const diffInDays = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));
  return `Coming in ${diffInDays} days`;
};