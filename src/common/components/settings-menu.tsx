import * as React from "react";

export const SettingsMenu: React.FunctionComponent = () => {
  return (
    <div>
      <aside className="menu">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <a>Bases</a>
          </li>
          <li>
            <a>Home</a>
          </li>
        </ul>
      </aside>
    </div>
  );
};
