import * as React from "react";
import { GetWorkspacesDocument } from "../../../../../server/graphql/graphql-types";
import { EmptyBox } from "../../../empty-box";
import { Link } from "react-router-dom";
import { NarrowLayout } from "../../../layouts/narrow-layout";
import { HyperTable } from "../../../tables/hypertable";
import { workspaceTable } from "../../../tables/workspace-table";
import { useQuery } from "@apollo/react-hooks";

export const ListWorkspacesPage: React.FunctionComponent = () => {
  const { loading, error, data } = useQuery(GetWorkspacesDocument);

  return (
    <NarrowLayout>
      <h3 className="title is-3">Workspaces</h3>
      <div className="container">
        <div className="columns">
          <div className="column">
            {data?.workspaces?.length ? (
              <HyperTable columns={workspaceTable} data={data.workspaces} />
            ) : (
              <EmptyBox />
            )}
            <div className="buttons is-right">
              <Link to={"/workspaces/new"} className={"button is-primary"}>
                Add workspace
              </Link>
            </div>
          </div>
        </div>
      </div>
    </NarrowLayout>
  );
};
