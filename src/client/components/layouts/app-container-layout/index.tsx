import * as React from "react";
import { NavBar } from "../../navbar";

export const AppContainerLayout: React.FunctionComponent = props => {
  return (
    <div>
      <NavBar />
      <div className="container app-container">{props.children}</div>
    </div>
  );
};
