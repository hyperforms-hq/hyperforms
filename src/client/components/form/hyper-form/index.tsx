import * as React from "react";
import { FormErrorBox } from "../form-error-box";
import { ButtonBar } from "../../primitives/button-bar";
import { Button } from "../../primitives/button";
import { Form } from "react-final-form";
import { ValidationErrors } from "final-form";

export interface HyperFormProps<FormValues> {
  handleSubmit: (values: FormValues) => any;
  validate?: (
    values: FormValues
  ) => ValidationErrors | Promise<ValidationErrors> | undefined;
  primaryActionText: string;
}

export function HyperForm<FormValues>(
  props: React.PropsWithChildren<HyperFormProps<FormValues>>
) {
  return (
    <Form<FormValues> onSubmit={props.handleSubmit} validate={props.validate}>
      {formProps => {
        return (
          <form onSubmit={formProps.handleSubmit}>
            {props.children}
            <FormErrorBox {...formProps} />
            <ButtonBar>
              <Button
                text={props.primaryActionText}
                className={"is-primary"}
                disabled={formProps.submitting || formProps.pristine}
              />
            </ButtonBar>
          </form>
        );
      }}
    </Form>
  );
}
