import * as React from "react";
import classNames from "classnames";
import { Field } from "react-final-form";
import { HyperInput } from "../hyperInput";
import { HyperPassword } from "../hyperPassword";

export type HyperFieldType = "string" | "password" | "integer";

export interface InputProps {
  name: string;
  type: HyperFieldType;
  label?: string;
  required?: boolean;
}

function getComponentFromProps(props: InputProps): React.ReactNode {
  switch (props.type) {
    case "string":
      return <Field name={props.name} component={HyperInput}  />;
    case "password":
      return <Field name={props.name} component={HyperPassword} />;
    case "integer":
      return <Field name={props.name} component={HyperInput} />;
  }
}

export const HyperField: React.FunctionComponent<InputProps> = props => {
  return (
    <div className="field">
      <label htmlFor="" className="label">
        {props.label}
      </label>
      <div className={classNames("control")}>
        {getComponentFromProps(props)}
      </div>
    </div>
  );
};
