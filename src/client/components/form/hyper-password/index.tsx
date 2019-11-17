import * as React from "react";
import { FieldRenderProps } from "react-final-form";

export const HyperPassword: React.FunctionComponent<FieldRenderProps<
  string,
  HTMLInputElement
>> = ({ input }) => {
  return (
    <input {...input} type="password" placeholder="*******" className="input" />
  );
};
