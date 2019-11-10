import * as React from "react";
import { GetWorkspacesComponent } from "../../../../server/graphql/graphql-types";
import { AppContainerLayout } from "../../layouts/app-container-layout";
import { WorkspacesTable } from "../../tables/workspaces-table"
import { EmptyBox } from "../../empty-box"

export const Workspaces: React.FunctionComponent = () => {
  return (
    <AppContainerLayout>
      <div className="columns">
        <GetWorkspacesComponent>
          {({ data }) => {
            if (!data || !data.workspaces || !data.workspaces.length) {
              return <EmptyBox />;
            }
            return (
              <div className="column">
                <WorkspacesTable />
              </div>
            );
          }}
        </GetWorkspacesComponent>
      </div>
    </AppContainerLayout>
  );
};
