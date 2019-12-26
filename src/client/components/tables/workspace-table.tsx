import * as React from "react";
import * as ReactTable from "react-table";
import { Workspace } from "../../../server/graphql/graphql-types";
import { Link } from "react-router-dom";
import { pathForWorkspace } from "../../../common/url-for";

export const workspaceTable: Array<ReactTable.Column<Workspace>> = [
  {
    Header: "Display Name",
    accessor: "displayName",
    Cell: ({ row }) => {
      return (
        <Link to={pathForWorkspace(row.original.urlKey)}>
          {row.values.displayName}
        </Link>
      );
    }
  }
];
