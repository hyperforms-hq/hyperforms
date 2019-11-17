import * as React from "react";
import { CenteredBoxLayout } from "../../layouts/centered-box-layout";
import { Link } from "react-router-dom";
import { Form } from "react-final-form";
import { FORM_ERROR } from "final-form";
import { HyperField } from "../../form/hyper-field";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { AuthenticationResult } from "../../../../common/api-types/authentication-result";

export const Login: React.FunctionComponent = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);

  async function onSubmit(...args: any) {
    try {
      await axios.post<AuthenticationResult>("/login", args[0]);
      setLoggedIn(true);
    } catch {
      return { [FORM_ERROR]: "Invalid user name or password" };
    }
  }

  return (
    <CenteredBoxLayout>
      {loggedIn && <Redirect to={"/"} />}
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, submitError }) => {
          return (
            <form onSubmit={handleSubmit}>
              <HyperField name={"email"} label={"e-Mail"} type={"string"} />
              <HyperField
                name={"password"}
                label={"Password"}
                type={"password"}
              />
              {submitError && <div className="notification">{submitError}</div>}
              <div className="buttons is-right">
                <Link to={"/signup"} className={"button"}>
                  Create account
                </Link>
                <input
                  type="submit"
                  className="button is-primary"
                  value="Login"
                />
              </div>
            </form>
          );
        }}
      </Form>
    </CenteredBoxLayout>
  );
};
