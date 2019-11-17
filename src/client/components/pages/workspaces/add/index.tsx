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
import { FormErrorBox } from "../../../form/form-error-box";
import { FORM_ERROR } from "final-form";
import { useState } from "react";
import { Redirect } from "react-router";
import { HyperForm } from "../../../form/hyper-form"

export interface AddWorkspacePageProps {}

export const AddWorkspacePage: React.FunctionComponent<AddWorkspacePageProps> = props => {
  const [createWorkspace] = useMutation<
    CreateWorkspaceMutationResult,
    WorkspaceInput
  >(CreateWorkspaceDocument);

  const [shouldRedirect, redirect] = useState(false);

  async function onSubmit(values: WorkspaceInput) {
    try {
      await createWorkspace({
        variables: values
      });
      redirect(true);
      return null;
    } catch (error) {
      return {
        [FORM_ERROR]: getReadableErrorsFromGraphQLErrors(error.graphQLErrors)
      };
    }
  }

  return (
    <NarrowLayout>
      {shouldRedirect && <Redirect to={"/"} />}
      <HyperForm handleSubmit={onSubmit} primaryActionText={"Create workspace"}>
        <HyperField
          name={"name"}
          label={"Workspace name"}
          type={"string"}
        />
      </HyperForm>
    </NarrowLayout>
  );
};
