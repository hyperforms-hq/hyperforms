import * as React from "react";
import { GetWorkspacesComponent } from "../../../../../server/graphql/graphql-types";
import { AppContainerLayout } from "../../../layouts/app-container-layout";
import { WorkspacesTable } from "../../../tables/workspaces-table";
import { EmptyBox } from "../../../empty-box";
import { Button } from "../../../primitives/button";
import { Link } from "react-router-dom";

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
        <Link to={"/workspaces/new"} className={"button"}>
          Add workspace
        </Link>
      </div>
    </AppContainerLayout>
  );
};
