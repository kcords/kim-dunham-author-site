import { Field, FieldMetaState, Form } from "react-final-form";
import {
  composeValidators,
  validateEmail,
  validateRequired,
} from "../../../validators.ts";

import { ContactFormTemplateField } from "../../../constants.ts";
import { FormApi } from "final-form";
import { FormData } from "../../../models.ts";
import classes from "./ContactForm.module.css";
import { compileClassList } from "../../../utils.ts";
import { contactForm } from "../../../strings.ts";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const isErrored = (meta: FieldMetaState<unknown>) => meta.touched && meta.error;

const renderErrorMsg = (meta: FieldMetaState<unknown>) => {
  if (!isErrored(meta)) return null;
  return (
    <p className={classes.inputError} role="alert">
      {meta.error}
    </p>
  );
};

export const ContactForm = () => {
  const { VITE_EMAILJS_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } =
    import.meta.env;

  const onSubmit = async (formData: FormData, form: FormApi) => {
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
          return (
            <>
              <Field
                name={ContactFormTemplateField.Name}
                type="text"
                required
                validate={validateRequired}
                render={({ input, meta }) => {
                  return (
                    <div className={classes.inputContainer}>
                      <input
                        className={compileClassList(
                          classes.input,
                          isErrored(meta) && classes.inputErrored
                        )}
                        placeholder=""
                        {...input}
                        autoCapitalize="words"
                        autoComplete="on"
                      />
                      <label htmlFor="email" className={classes.label}>
                        {contactForm.nameLabel}
                      </label>
                      {renderErrorMsg(meta)}
                    </div>
                  );
                }}
              />
              <Field
                name={ContactFormTemplateField.Email}
                type="email"
                required
                validate={composeValidators(validateRequired, validateEmail)}
                render={({ input, meta }) => {
                  return (
                    <div className={classes.inputContainer}>
                      <input
                        className={compileClassList(
                          classes.input,
                          isErrored(meta) && classes.inputErrored
                        )}
                        placeholder=""
                        autoComplete="on"
                        {...input}
                      />
                      <label htmlFor="email" className={classes.label}>
                        {contactForm.emailLabel}
                      </label>
                      {renderErrorMsg(meta)}
                    </div>
                  );
                }}
              />
              <Field
                name={ContactFormTemplateField.Message}
                type="text"
                required
                validate={validateRequired}
                render={({ input, meta }) => {
                  return (
                    <div className={classes.inputContainer}>
                      <textarea
                        className={compileClassList(
                          classes.input,
                          classes.messageBodyInput,
                          isErrored(meta) && classes.inputErrored
                        )}
                        placeholder=""
                        autoComplete="off"
                        autoCorrect="on"
                        {...input}
                      />
                      <label htmlFor="email" className={classes.label}>
                        {contactForm.messageBodyLabel}
                      </label>
                      {renderErrorMsg(meta)}
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