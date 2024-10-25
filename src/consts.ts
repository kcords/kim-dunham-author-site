export const SECOND_IN_MILLISECONDS = 1000;
export const MINUTE_IN_MILLISECONDS = 60 * SECOND_IN_MILLISECONDS;
export const HOUR_IN_MILLISECONDS = 60 * MINUTE_IN_MILLISECONDS;

export enum SocialIconSize {
  Small = "sm",
  Large = "lg",
}

// Values must match corresponding email template defined at emailjs
export enum ContactFormTemplateField {
  Name = "name",
  Email = "email",
  Message = "message",
}
