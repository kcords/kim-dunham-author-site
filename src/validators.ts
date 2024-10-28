import { FieldState, FieldValidator } from "final-form";

import isEmail from "validator/lib/isEmail";
import { validationError } from "./data/strings.json";

export const validateEmail = (value: unknown): string | undefined =>
  isEmail((value as string) || "") ? undefined : validationError.email;

export const validateRequired = (value: string): string | undefined =>
  value ? undefined : validationError.required;

export const composeValidators =
  (...validators: FieldValidator<string>[]) =>
  (
    value: string,
    allValues: object,
    meta: FieldState<string> | undefined
  ): string | undefined => {
    for (const validator of validators) {
      const result = validator(value, allValues, meta);
      if (typeof result === "string") return result;
    }
  };
