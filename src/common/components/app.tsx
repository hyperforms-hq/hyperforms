import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { Settings } from "./pages/settings";
import { Signup } from "./pages/signup";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Route exact path={"/signup"} component={Signup} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/"} component={Settings} />
      </div>
    </Router>
  );
};

export default App;
