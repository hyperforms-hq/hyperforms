import * as React from "react";
import { CenteredBox } from "../../layouts/centered-box";
import { Link } from "react-router-dom";
import { Form } from "react-final-form";
import { FORM_ERROR } from "final-form";
import { HyperField } from "../../form/hyperField";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { AuthenticationResult } from "../../../../common/api-types/authentication-result";

export const Login: React.FunctionComponent = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);

  async function onSubmit(...args: any) {
    try {
      const result = await axios.post<AuthenticationResult>("/login", args[0]);
      if (result.data.result === "success") {
        setLoggedIn(true);
      } else {
        return { [FORM_ERROR]: "Invalid user name or password" };
      }
    } catch (ex) {
      return { [FORM_ERROR]: "Invalid user name or password" };
    }
  }

  return (
    <CenteredBox>
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
    </CenteredBox>
  );
};
