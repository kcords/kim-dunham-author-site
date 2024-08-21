import { Field, Form } from "react-final-form";

import { FormApi } from "final-form";
import { FormData } from "../../../models.ts";
import classes from "./ContactForm.module.css";
import { compileClassList } from "../../../utils.ts";
import { contactForm } from "../../../strings.ts";
import emailjs from "@emailjs/browser";
import { isEmail } from "validator";
import { toast } from "react-toastify";

export const ContactForm = () => {
  const { VITE_EMAILJS_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } =
    import.meta.env;

  const onSubmit = async (formData: FormData, form: FormApi) => {
    return; // TODO set up email templates, then enable code below
    const result = emailjs.send(
      VITE_EMAILJS_SERVICE_ID,
      VITE_TEMPLATE_ID,
      formData,
      {
        publicKey: VITE_PUBLIC_KEY,
      }
    );
    toast.promise(result, {
      pending: contactForm.submitInProgress,
      success: contactForm.submitSuccess,
      error: contactForm.submitError,
    });
    await result;
    form.restart();
  };

  return (
    <article className={classes.contactFormContainer}>
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, submitting, pristine, dirty, valid }) => {
          console.log({ submitting, pristine, dirty, valid });
          return (
            <>
              <Field
                name="name"
                type="text"
                required
                render={({ input }) => {
                  return (
                    <div className={classes.inputContainer}>
                      <input
                        className={classes.input}
                        placeholder=""
                        {...input}
                      />
                      <label htmlFor="email" className={classes.label}>
                        {contactForm.nameLabel}
                      </label>
                    </div>
                  );
                }}
              />
              <Field
                name="email"
                type="email"
                required
                validate={(value) =>
                  isEmail(value || "") ? undefined : "Invalid email address"
                }
                render={({ input }) => {
                  return (
                    <div className={classes.inputContainer}>
                      <input
                        className={classes.input}
                        placeholder=""
                        {...input}
                      />
                      <label htmlFor="email" className={classes.label}>
                        {contactForm.emailLabel}
                      </label>
                    </div>
                  );
                }}
              />
              <Field
                name="message"
                type="text"
                required
                render={({ input }) => {
                  return (
                    <div className={classes.inputContainer}>
                      <textarea
                        className={compileClassList(
                          classes.input,
                          classes.messageBodyInput
                        )}
                        placeholder=""
                        {...input}
                      />
                      <label htmlFor="email" className={classes.label}>
                        {contactForm.messageBodyLabel}
                      </label>
                    </div>
                  );
                }}
              />
              <button
                type="submit"
                className={classes.submitBtn}
                onClick={handleSubmit}
                disabled={pristine || (dirty && !valid) || submitting}
              >
                {contactForm.submitBtnLabel}
              </button>
            </>
          );
        }}
      </Form>
    </article>
  );
};
