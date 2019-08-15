import React from "react";

import { NavBar } from "./navbar";
import { SettingsMenu } from "./settings-menu";

const App: React.FC = () => {
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

export default App;
