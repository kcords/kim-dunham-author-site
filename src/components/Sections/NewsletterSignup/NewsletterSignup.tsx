import { Field, Form } from "react-final-form";

import { FormApi } from "final-form";
import { FormData } from "../../../models.ts";
import { SectionWrapper } from "../../SectionWrapper/index.ts";
import { addNewSubscriber } from "../../../api.ts";
import classes from "./NewsletterSignup.module.css";
import isEmail from "validator/lib/isEmail";
import { newsletter } from "../../../strings";
import { toast } from "react-toastify";

export const NewsletterSignup = () => {
  const onSubmit = async ({ email }: FormData, form: FormApi) => {
    const result = addNewSubscriber(email);
    toast.promise(result, {
      pending: newsletter.signupInProgress,
      success: newsletter.signupSuccess,
      error: newsletter.signupError,
    });
    await result;
    form.restart();
  };

  return (
    <SectionWrapper
      direction={SectionWrapper.Direction.Column}
      gap={SectionWrapper.Gap.None}
      backgroundColor={SectionWrapper.BackgroundColor.Transparent}
      paddingCollapse
    >
      <h2 className={classes.heading}>{newsletter.heading}</h2>
      <p className={classes.subheading}>{newsletter.subheading}</p>
      <p className={classes.subheading}>{newsletter.leadMagnet}</p>
      <div className={classes.inputContainer}>
        <Form onSubmit={onSubmit}>
          {({ handleSubmit, submitting, pristine, dirty, valid }) => {
            return (
              <>
                <Field
                  name="email"
                  type="email"
                  validate={(value) =>
                    isEmail(value || "") ? undefined : "Invalid email address"
                  }
                  render={({ input }) => {
                    return (
                      <>
                        <input
                          id="email"
                          className={classes.input}
                          type="email"
                          placeholder=""
                          {...input}
                        />
                        <label htmlFor="email" className={classes.label}>
                          {newsletter.emailLabel}
                        </label>
                      </>
                    );
                  }}
                />
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className={classes.signupBtn}
                  disabled={pristine || (dirty && !valid) || submitting}
                >
                  {newsletter.signupBtnLabel}
                </button>
              </>
            );
          }}
        </Form>
      </div>
    </SectionWrapper>
  );
};
