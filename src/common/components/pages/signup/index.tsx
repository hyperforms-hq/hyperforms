import * as React from "react";
import { Logo } from "../../logo";
import styles from "./index.module.scss";

export const Signup: React.FunctionComponent = () => {
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
                  <div className="field">
                    <label htmlFor="" className="label">
                      Email
                    </label>
                    <div className="control has-icons-left">
                      <input
                        type="email"
                        placeholder="e.g. bobsmith@gmail.com"
                        className="input"
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-envelope" />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="" className="label">
                      Password
                    </label>
                    <div className="control has-icons-left">
                      <input
                        type="password"
                        placeholder="*******"
                        className="input"
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-lock" />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="" className="checkbox">
                      <input type="checkbox" />
                      <span className={styles.rememberMeText}>Remember me</span>
                    </label>
                  </div>
                  <div className="field">
                    <button className="button is-primary">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
