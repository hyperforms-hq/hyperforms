import * as React from "react";
import { Navbar } from "../../primitives/navbar/navbar";

export const AppContainerLayout: React.FunctionComponent = props => {
  return (
    <div>
      <Navbar />
      <div className="app-container">{props.children}</div>
    </div>
  );
};
