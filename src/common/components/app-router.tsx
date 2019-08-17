import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { Index } from "./pages/settings";
import { Signup } from "./pages/signup";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <div>
        <Route exact path={"/signup"} component={Signup} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/"} component={Index} />
      </div>
    </Router>
  );
};

export default AppRouter;
