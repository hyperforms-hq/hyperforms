import * as React from "react";
import { NavBar } from "../../navbar";
import { SettingsMenu } from "../../settings-menu";

export const Index: React.FunctionComponent = () => {
  return (
    <div>
      <NavBar />
      <div className="container app-container">
        <div className="columns">
          <div className="white-box column is-one-quarter">
            <SettingsMenu />
          </div>
          <div className="column">Second column</div>
        </div>
      </div>
    </div>
  );
};
