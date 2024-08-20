import { Field, Form } from "react-final-form";
import {
  SUBSTACK_API_URL,
  SUBSTACK_PROFILE_URL as domain,
} from "../../../constants";

import { FormApi } from "final-form";
import { FormData } from "../../../models.ts";
import axios from "axios";
import classes from "./NewsletterSignup.module.css";
import isEmail from "validator/lib/isEmail";
import { newsletter } from "../../../strings";
import { toast } from "react-toastify";

const headers = { "Content-Type": "application/json" };

export const NewsletterSignup = () => {
  const onSubmit = async ({ email }: FormData, form: FormApi) => {
    const result = axios.post(SUBSTACK_API_URL, { email, domain }, { headers });
    toast.promise(result, {
      pending: newsletter.signupInProgress,
      success: newsletter.signupSuccess,
      error: newsletter.signupError,
    });
    await result;
    form.restart();
  };

  return (
    <aside className={classes.container}>
      <h2 className={classes.heading}>{newsletter.heading}</h2>
      <p className={classes.subheading}>{newsletter.subheading}</p>
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
    </aside>
  );
};
