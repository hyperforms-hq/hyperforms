import * as React from "react";
import { FieldMetaState, FormRenderProps } from "react-final-form";
import "./index.scss";
import { FORM_ERROR } from "final-form";

export function FormErrorBox<FormValues>(props: FormRenderProps<FormValues>) {
  // In case of no error, we just return null
  if (!props.invalid || !props.submitErrors) {
    return null;
  }
  return (
    <div className="form-error-box">
      <i className="fas fa-exclamation-circle" />
      <span className="error-text">
        Error submitting form: {props.submitErrors[FORM_ERROR]}
      </span>
    </div>
  );
}
