import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Settings } from "./pages/settings";
import { Signup } from "./pages/signup";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Route exact path={"/signup"} component={Signup} />
        <Route exact path={"/"} component={Settings} />
      </div>
    </Router>
  );
};

export default App;
