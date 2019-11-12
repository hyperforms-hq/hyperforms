import * as React from "react";
import { NarrowLayout } from "../../../layouts/narrow-layout";
import { Form } from "react-final-form";
import { HyperField } from "../../../form/hyperField";
import { Button } from "../../../primitives/button";
import { ButtonBar } from "../../../primitives/button-bar";

export interface AddWorkspacePageProps {}

export const AddWorkspacePage: React.FunctionComponent<AddWorkspacePageProps> = props => {
  async function onSubmit(...args: any) {}

  return (
    <NarrowLayout>
      <Form onSubmit={onSubmit}>
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
