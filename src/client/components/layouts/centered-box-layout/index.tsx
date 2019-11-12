import * as React from "react";
import styles from "./index.module.scss";
import { Logo } from "../../logo";

export const CenteredBoxLayout: React.FunctionComponent = props => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <div className="box">
                <div className={styles.logoWrapper}>
                  <Logo />
                </div>
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
