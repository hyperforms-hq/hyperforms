import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { Login } from "./pages/login";
import { Settings } from "./pages/settings";
import { Signup } from "./pages/signup";
import { onError } from "apollo-link-error";
import { apolloClient } from "../graphql/apollo-client";

onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path, extensions }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
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
