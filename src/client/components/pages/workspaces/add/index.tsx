import * as React from "react";
import { NarrowLayout } from "../../../layouts/narrow-layout";
import { HyperField } from "../../../form/hyper-field";
import { useMutation } from "@apollo/react-hooks";

import {
  CreateWorkspaceDocument,
  CreateWorkspaceMutationResult,
  WorkspaceInput
} from "../../../../../server/graphql/graphql-types";
import { getReadableErrorsFromGraphQLErrors } from "../../../../graphql/errors";
import { AnyObject, FORM_ERROR, ValidationErrors } from "final-form"
import { useState } from "react";
import { Redirect } from "react-router";
import { HyperForm } from "../../../form/hyper-form";

export interface AddWorkspacePageProps {}

export const AddWorkspacePage: React.FunctionComponent<AddWorkspacePageProps> = props => {
  const [createWorkspace] = useMutation<
    CreateWorkspaceMutationResult,
    { workspace: WorkspaceInput }
  >(CreateWorkspaceDocument);

  const [shouldRedirect, redirect] = useState(false);

  async function onSubmit(values: WorkspaceInput) {
    try {
      await createWorkspace({
        variables: {
          workspace: values
        }
      });
      redirect(true);
    } catch (error) {
      return {
        [FORM_ERROR]: getReadableErrorsFromGraphQLErrors(error.graphQLErrors)
      };
    }
  }

  function validate(values?: Partial<WorkspaceInput>): ValidationErrors {
    const errors: AnyObject = {}
    if(!values) {
      // If the form is not initialized, values will be null
      return errors
    }
    if(!values.displayName) {
      errors.displayName = "Required"
    }
    return errors;
  }

  return (
    <NarrowLayout>
      {shouldRedirect && <Redirect to={"/"} />}
      <HyperForm<WorkspaceInput> validate={validate} handleSubmit={onSubmit} primaryActionText={"Create workspace"}>
        <HyperField name={"displayName"} label={"Workspace name"} type={"string"} />
      </HyperForm>
    </NarrowLayout>
  );
};
