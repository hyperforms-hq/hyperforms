import * as React from "react";
import styles from "./centered-box.module.scss";
import { Logo } from "../logo";

export const CenteredBox: React.FunctionComponent = props => {
  return (
    <div>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                <form action="" className="box">
                  <div className={styles.logoWrapper}>
                    <Logo />
                  </div>
                  {props.children}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
