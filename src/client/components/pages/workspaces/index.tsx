import * as React from "react";
import { GetWorkspacesComponent } from "../../../../server/graphql/graphql-types";
import { AppContainerLayout } from "../../layouts/app-container-layout"

export const Workspaces: React.FunctionComponent = () => {
  return (
    <AppContainerLayout>
        <div className="columns">
          <GetWorkspacesComponent>
            {({ data }) => {
              if (!data || !data.workspaces || !data.workspaces.length) {
                return null;
              }
              return (
                <div className="column">
                  <div>{data.workspaces[0].displayName} </div>
                </div>
              );
            }}
          </GetWorkspacesComponent>
        </div>
    </AppContainerLayout>
  );
};
