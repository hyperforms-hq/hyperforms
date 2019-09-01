import * as React from "react";
import "./index.module.scss";
export const Logo: React.FunctionComponent = () => {
  return (
    <div className="wrapper">
      <div className="logoWrapper">
        <div className="bar1" />
        <div className="bar2" />
        <div className="bar3" />
      </div>
      <div className="textWrapper">hyperforms</div>
    </div>
  );
};
