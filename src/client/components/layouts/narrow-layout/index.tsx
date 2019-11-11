import * as React from "react";
import { AppContainerLayout } from "../app-container-layout";

export type NarrowLayoutProps = {};

export const NarrowLayout: React.FunctionComponent<NarrowLayoutProps> = props => {
  return <AppContainerLayout>{props.children}</AppContainerLayout>;
};
