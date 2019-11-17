import * as React from "react";
import { FieldRenderProps } from "react-final-form";
import { FieldErrorBox } from "../field-error-box";

export const HyperInput: React.FunctionComponent<FieldRenderProps<
  string,
  HTMLInputElement
>> = ({ input, meta }) => {
  return (
    <>
      <input {...input} className="input" />
      <FieldErrorBox {...meta} />
    </>
  );
};
