import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { Login } from "./pages/login";
import { Settings } from "./pages/settings";
import { Signup } from "./pages/signup";
import ApolloClient from "apollo-boost";

const apolloClient = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

const AppRouter: React.FC = () => {
  return (
    <Router>
      <ApolloProvider client={apolloClient}>
        <div>
          <Route exact path={"/signup"} component={Signup} />
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/"} component={Settings} />
        </div>
      </ApolloProvider>
    </Router>
  );
};

export default AppRouter;
