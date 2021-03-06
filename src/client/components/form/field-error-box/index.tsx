import * as React from "react";
import { FieldMetaState } from "react-final-form";
import "./index.scss";

export const FieldErrorBox: React.FunctionComponent<FieldMetaState<
  any
>> = props => {
  // In case of no error, we just return null
  if (!(props.error && props.touched)) {
    return null;
  }
  return (
    <div>
      <i className="fas fa-exclamation-circle" />
      <span className="error-text"> {props.error} </span>
    </div>
  );
};
