import * as React from "react";
import * as ReactTable from "react-table";
import { Workspace } from "../../../../server/graphql/graphql-types";
import { Link } from "react-router-dom";
import { pathForWorkspace } from "../../../../common/url-for";

export interface WorkspacesTableProps {
  data: Workspace[];
}

export const WorkspacesTable: React.FunctionComponent<WorkspacesTableProps> = props => {
  const columns: Array<ReactTable.Column<Workspace>> = [
    {
      Header: "Display Name",
      accessor: "displayName",
      Cell: ({ row }) => {
        console.log(row);
        return <Link to={pathForWorkspace(row.original.urlKey)}>{row.values.displayName}</Link>
      }
    }
  ];

  const {
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    getTableBodyProps
  } = ReactTable.useTable({ columns, data: props.data });

  return (
    <table {...getTableProps()} className="table is-bordered is-fullwidth">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
