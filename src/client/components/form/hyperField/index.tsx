import * as React from "react";
import classNames from "classnames";

export interface InputProps {
  label: string;
  children: React.ReactNode;
  childrenWrapperClass?: string[];
}

export const HyperField: React.FunctionComponent<InputProps> = ({
  label,
  children,
  childrenWrapperClass
}) => {
  return (
    <div className="field">
      <label htmlFor="" className="label">
        {label}
      </label>
      <div className={classNames("control", childrenWrapperClass)}>
        {children}
      </div>
    </div>
  );
};
