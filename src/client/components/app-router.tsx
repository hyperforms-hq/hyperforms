import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { Login } from "./pages/login";
import { ListWorkspacesPage } from "./pages/workspaces/list";
import { Signup } from "./pages/signup";
import { onError } from "apollo-link-error";
import { apolloClient } from "../graphql/apollo-client";
import { AddWorkspacePage } from "./pages/workspaces/add";
import { ViewWorkspacePage } from "./pages/workspaces/view";

onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
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
          <Route exact path={"/"} component={ListWorkspacesPage} />
          <Route exact path={"/workspaces/new"} component={AddWorkspacePage} />
          <Route exact path={"/w/:workspace"} component={ViewWorkspacePage} />
        </div>
      </ApolloProvider>
    </Router>
  );
};

export default AppRouter;
