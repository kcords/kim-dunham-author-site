export type Maybe<T> = T | null | undefined;

export type MaybeFalse<T> = Maybe<T | false>;

export type ISODateString =
  `${number}-${number}-${number}T${number}:${number}:${number}.${number}Z`;
