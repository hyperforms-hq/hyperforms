import * as React from "react";

export interface ButtonBarProps {}

export const ButtonBar: React.FunctionComponent<ButtonBarProps> = props => {
  return <div className="buttons is-right">{props.children}</div>;
};
