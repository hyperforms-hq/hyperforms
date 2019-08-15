import React from "react";
import "../../client/styles/bulma.scss";
import { NavBar } from "./navbar";
import { SettingsMenu } from "./settings-menu";

const App: React.FC = () => {
  return (
    <div className="container">
      <NavBar />
      <div className="columns">
        <div className="column is-one-quarter">
          <SettingsMenu />
        </div>
        <div className="column">Second column</div>
      </div>
    </div>
  );
};

export default App;
