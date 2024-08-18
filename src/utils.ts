export const compileClassList = (...args: string[]): string =>
  args
    .reduce(
      (classList, className) =>
        className ? `${classList} ${className}` : classList,
      ""
    )
    .trimStart();
