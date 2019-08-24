import { importSchema } from "graphql-import";
import { gql } from "apollo-boost";
import { HyperformsContext } from "./hyperformsContext";
import { Request } from "express";
import { ApolloServer } from "apollo-server-express";
import { config } from "dotenv";
import { AuthenticationError } from "apollo-server";
import { Resolvers } from "./graphql-types";

config();

const typeDefs = gql(importSchema("src/server/graphql/schema.graphql"));

// @ts-ignore
export function getContext({ req }: { req: Request }) {
  const context: HyperformsContext = {
    authorizationHeader: req.header("Authorization")
  };
  return context;
}

const resolvers: Resolvers = {
  Query: {
    documents: async () => {
      throw new AuthenticationError("UNAUTHORIZED");
    }
  }
};

export const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
  context: getContext
});
