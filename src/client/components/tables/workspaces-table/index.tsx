import * as React from "react"
import * as ReactTable from "react-table"

export const WorkspacesTable: React.FunctionComponent = () => {

  const columns = React.useMemo(() => [
    {
      Header: "Display Name",
      accessor: "displayName",
    }
  ] as Array<ReactTable.Column>, [])

  const {
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    getTableBodyProps
  } = ReactTable.useTable({ columns, data: [] })

  return <table {...getTableProps()}>
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
    {rows.map(
      (row) => {
        prepareRow(row)
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => {
              return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
            })}
          </tr>
        )
      }
    )}
    </tbody>
  </table>
}
