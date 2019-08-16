import * as React from "react";
import { CenteredBox } from "../layouts/centered-box";

export const Signup: React.FunctionComponent = () => {
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
        <label htmlFor="" className="label">
          Confirm password
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
      <div className="buttons is-right">
        <button className="button is-primary">Create account</button>
      </div>
    </CenteredBox>
  );
};
