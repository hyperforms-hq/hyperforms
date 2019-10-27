import * as React from "react";
import { NavBar } from "../../navbar";
import { SettingsMenu } from "../../settings-menu";
import { GetUserComponent } from "../../../../server/graphql/graphql-types";

export const Workspaces: React.FunctionComponent = () => {
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
