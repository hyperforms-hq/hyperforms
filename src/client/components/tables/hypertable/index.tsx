import * as React from "react";
import * as ReactTable from "react-table";

export interface HyperTableProps {
  columns: Array<ReactTable.Column<any>>
  data: any
}

export const HyperTable: React.FunctionComponent<HyperTableProps> = ({ columns, data }) => {

  const {
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    getTableBodyProps,
  } = ReactTable.useTable({ columns, data });

  return <table {...getTableProps()} className="table is-bordered is-fullwidth">
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
  </table>;
};
