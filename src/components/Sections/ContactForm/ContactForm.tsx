import { Field, FieldMetaState, Form } from "react-final-form";
import {
  composeValidators,
  validateEmail,
  validateRequired,
} from "../../../validators.ts";

import { ContactFormTemplateField } from "../../../consts.ts";
import { FormApi } from "final-form";
import { FormData } from "../../../models.ts";
import { Photo } from "../../Photo";
import { SectionWrapper } from "../../SectionWrapper/SectionWrapper.tsx";
import cLaptop from "../../../assets/images/c_laptop_square.jpg";
import classes from "./ContactForm.module.css";
import { compileClassList } from "../../../utils.ts";
import { contactForm } from "@/data/strings.json";
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
  const {
    VITE_EMAILJS_SERVICE_ID,
    VITE_EMAILJS_TEMPLATE_ID,
    VITE_EMAILJS_PUBLIC_KEY,
  } = import.meta.env;

  const onSubmit = async (formData: FormData, form: FormApi) => {
    // TODO Move this to a netlify fn to hide api key in request
    const result = emailjs.send(
      VITE_EMAILJS_SERVICE_ID,
      VITE_EMAILJS_TEMPLATE_ID,
      formData,
      {
        publicKey: VITE_EMAILJS_PUBLIC_KEY,
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
    <SectionWrapper>
      <Photo src={cLaptop} alt={""} height="300" width="300" />
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, submitting, pristine, dirty, valid }) => {
          return (
            <div className={classes.contactFormContainer}>
              <h2 className={classes.formSubheading}>{contactForm.heading}</h2>
              <Field
                name={ContactFormTemplateField.Name}
                type="text"
                required
                validate={validateRequired}
                render={({ input, meta }) => {
                  return (
                    <div className={classes.inputContainer}>
                      <input
                        id="name"
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
                        id="email"
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
                        id="message"
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
                      <label htmlFor="message" className={classes.label}>
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
            </div>
          );
        }}
      </Form>
    </SectionWrapper>
  );
};
