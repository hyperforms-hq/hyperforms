import * as React from "react"
import { NavBar } from "../../navbar"
import { GetWorkspacesComponent } from "../../../../server/graphql/graphql-types"

export const Workspaces: React.FunctionComponent = () => {
  return (
    <>
      <NavBar/>
      <div className="container app-container">
        <div className="columns">
          <GetWorkspacesComponent>
            {({ data }) => {
              if (!data || !data.workspaces || !data.workspaces.length) {
                return null
              }
              return (
                <div className="column">
                  <div>{data.workspaces[0].displayName} </div>
                </div>
              )
            }}
          </GetWorkspacesComponent>
        </div>
      </div>
    </>
  )
}
