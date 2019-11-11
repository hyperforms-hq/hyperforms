import * as React from "react";
import { GetWorkspacesComponent } from "../../../../../server/graphql/graphql-types";
import { AppContainerLayout } from "../../../layouts/app-container-layout";
import { WorkspacesTable } from "../../../tables/workspaces-table";
import { EmptyBox } from "../../../empty-box";
import { Button } from "../../../primitives/button";

export const ListWorkspacesPage: React.FunctionComponent = () => {
  return (
    <AppContainerLayout>
      <div className="columns">
        <GetWorkspacesComponent>
          {({ data }) => {
            if (!data?.workspaces?.length) {
              return <EmptyBox />;
            }
            return (
              <div className="column">
                <WorkspacesTable />
              </div>
            );
          }}
        </GetWorkspacesComponent>
        <Button text={"Add new workspace"} />
      </div>
    </AppContainerLayout>
  );
};
