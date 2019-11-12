import * as React from "react";
import { AppContainerLayout } from "../app-container-layout";
import styles from "../centered-box-layout/index.module.scss";
import { Logo } from "../../logo";

export type NarrowLayoutProps = {};

export const NarrowLayout: React.FunctionComponent<NarrowLayoutProps> = props => {
  return (
    <AppContainerLayout>
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-8-tablet is-6-widescreen">
            <div className="box">{props.children}</div>
          </div>
        </div>
      </div>
    </AppContainerLayout>
  );
};
