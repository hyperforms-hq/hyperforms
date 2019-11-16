import * as React from "react";
import { NarrowLayout } from "../../../layouts/narrow-layout";
import { Form } from "react-final-form";
import { HyperField } from "../../../form/hyperField";
import { Button } from "../../../primitives/button";
import { ButtonBar } from "../../../primitives/button-bar";
import { useMutation } from "@apollo/react-hooks"
import {
  CreateWorkspaceDocument,
  CreateWorkspaceMutationResult,
  WorkspaceInput
} from "../../../../../server/graphql/graphql-types"
import { FormApi } from "final-form"

export interface AddWorkspacePageProps {}

export const AddWorkspacePage: React.FunctionComponent<AddWorkspacePageProps> = props => {
  const [createWorkspace, { data }] = useMutation<CreateWorkspaceMutationResult, WorkspaceInput>(CreateWorkspaceDocument)

  async function onSubmit(values: WorkspaceInput) {
    // const workspace = await createWorkspace({
    //   variables: values
    // });
    return {
      "name": "Invalid name"
    }
  }

  return (
    <NarrowLayout>
      <Form<WorkspaceInput> onSubmit={onSubmit}>
        {({ handleSubmit, submitError }) => {
          return (
            <form onSubmit={handleSubmit}>
              <HyperField
                name={"name"}
                label={"Workspace name"}
                type={"string"}
              />
              <ButtonBar>
                <Button text={"Create workspace"} className={"is-primary"} />
              </ButtonBar>
            </form>
          );
        }}
      </Form>
    </NarrowLayout>
  );
};
