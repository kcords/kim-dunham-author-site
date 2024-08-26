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
