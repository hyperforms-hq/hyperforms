import * as React from "react";
import styles from "./index.module.scss";
import { CenteredBox } from "../../layouts/centered-box";
import { Link } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { HyperInput } from "../../form/hyperInput";
import { HyperField } from "../../form/hyperField";

export const Login: React.FunctionComponent = () => {
  function onSubmit(...args: any) {
    console.log(args);
  }

  return (
    <CenteredBox>
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
