import * as React from "react";
import { CenteredBox } from "../../layouts/centered-box";
import { Link } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { HyperField } from "../../form/hyperField";
import axios from "axios";
import { Redirect } from "react-router-dom";

export const Login: React.FunctionComponent = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);

  async function onSubmit(...args: any) {
    console.log("input");
    console.log(args);
    const result = await axios.post("/login", args[0]);
    if (result.data.result === "success") {
      setLoggedIn(true);
    }
  }

  return (
    <CenteredBox>
      {loggedIn && <Redirect to={"/"} />}
      <Form onSubmit={onSubmit}>
        {({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <HyperField name={"email"} label={"e-Mail"} type={"string"} />
              <HyperField
                name={"password"}
                label={"Password"}
                type={"password"}
              />
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
