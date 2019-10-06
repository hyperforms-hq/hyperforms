import * as React from "react";
import { NavBar } from "../../navbar";
import { SettingsMenu } from "../../settings-menu";
import { GetUserComponent } from "../../../../server/graphql/graphql-types";

export const Settings: React.FunctionComponent = () => {
  return (
    <GetUserComponent>
      {({ data }) => {
        if (!data || !data.users || !data.users.length) {
          return null;
        }
        return (
          <>
            <NavBar />
            <div className="container app-container">
              <div className="columns">
                <div className="white-box column is-one-quarter">
                  <SettingsMenu />
                </div>
                <div className="column">
                  <div>{data.users[0].email} </div>
                </div>
              </div>
            </div>
          </>
        );
      }}
    </GetUserComponent>
  );
};
