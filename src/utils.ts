export const compileClassList = (...args: string[]): string =>
  args
    .reduce(
      (classList, className) =>
        typeof className === "string" ? `${classList} ${className}` : classList,
      ""
    )
    .trim();
