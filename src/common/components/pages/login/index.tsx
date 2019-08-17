import * as React from "react";
import styles from "./index.module.scss";
import { CenteredBox } from "../../layouts/centered-box";
import { Link } from "react-router-dom";

export const Login: React.FunctionComponent = () => {
  return (
    <CenteredBox>
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
      <div className="buttons is-right">
        <Link to={"/signup"} className={"button"}>
          Create account
        </Link>
        <button className="button is-primary">Login</button>
      </div>
    </CenteredBox>
  );
};
