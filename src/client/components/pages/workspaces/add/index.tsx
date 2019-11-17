import * as React from "react";
import { NarrowLayout } from "../../../layouts/narrow-layout";
import { Form } from "react-final-form";
import { HyperField } from "../../../form/hyperField";
import { Button } from "../../../primitives/button";
import { ButtonBar } from "../../../primitives/button-bar";
import { useMutation } from "@apollo/react-hooks";

import {
  CreateWorkspaceDocument,
  CreateWorkspaceMutationResult,
  WorkspaceInput
} from "../../../../../server/graphql/graphql-types";
import { getReadableErrorsFromGraphQLErrors } from "../../../../graphql/errors";
import { FormErrorBox } from "../../../form/form-error-box";
import { FORM_ERROR } from "final-form"

export interface AddWorkspacePageProps {}

export const AddWorkspacePage: React.FunctionComponent<AddWorkspacePageProps> = props => {
  const [createWorkspace, { data }] = useMutation<
    CreateWorkspaceMutationResult,
    WorkspaceInput
  >(CreateWorkspaceDocument);

  async function onSubmit(values: WorkspaceInput) {
    try {
      await createWorkspace({
        variables: values
      });
      return null;
    } catch (error) {
      return {
        [FORM_ERROR]: getReadableErrorsFromGraphQLErrors(error.graphQLErrors)
      };
    }
  }

  return (
    <NarrowLayout>
      <Form<WorkspaceInput> onSubmit={onSubmit}>
        {props => {
          return (
            <form onSubmit={props.handleSubmit}>
              <HyperField
                name={"name"}
                label={"Workspace name"}
                type={"string"}
              />
              <FormErrorBox {...props} />
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
