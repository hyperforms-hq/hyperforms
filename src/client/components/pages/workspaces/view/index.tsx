import * as React from "react";
import { AppContainerLayout } from "../../../layouts/app-container-layout";
import { useParams } from "react-router";

export interface ViewWorkspacePageProps {

}

export const ViewWorkspacePage: React.FunctionComponent<ViewWorkspacePageProps> = props => {
  const { workspace } = useParams();

  return <AppContainerLayout>
    <div> {workspace} </div>
  </AppContainerLayout>;
};
