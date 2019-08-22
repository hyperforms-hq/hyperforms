import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloClient } from "apollo-client";
import { concat } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = new HttpLink({ uri: "/graphql" });

const authMiddleware = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log(graphQLErrors);
    const authenticationError = graphQLErrors.find(
      e => e.extensions && e.extensions.code == "UNAUTHENTICATED"
    );
    if (authenticationError) {
      window.location.href = "/login";
    }
  }

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export const apolloClient = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache()
});
