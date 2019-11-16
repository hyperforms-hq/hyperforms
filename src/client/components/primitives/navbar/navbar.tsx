import * as React from "react";
import { Logo } from "../../logo";

export const Navbar: React.FunctionComponent = () => {
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <Logo />
          </a>
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            href={"/"}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href={"/"}>
              Home
            </a>

            <a className="navbar-item" href={"/"}>
              Documentation
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href={"/"}>
                More
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item" href={"/"}>
                  About
                </a>
                <a className="navbar-item" href={"/"}>
                  Jobs
                </a>
                <a className="navbar-item" href={"/"}>
                  Contact
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href={"/"}>
                  Report an issue
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="bauttons">
                <a href={"/logout"} className="button">
                  Log out
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
