import * as React from "react";

export interface ButtonProps {
  className?: "is-primary" | "is-link";
  text: string;
  disabled?: boolean;
}

export const Button: React.FunctionComponent<ButtonProps> = (
  props: ButtonProps
) => {
  return (
    <button className={`button ${props.className || ""}`}>
      {props.text} disabled={props.disabled}
    </button>
  );
};
