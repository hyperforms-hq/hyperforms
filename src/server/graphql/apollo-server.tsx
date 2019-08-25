import { importSchema } from "graphql-import";
import { gql } from "apollo-boost";
import { HyperformsContext } from "./hyperformsContext";
import { Request } from "express";
import { ApolloServer } from "apollo-server-express";
import { config } from "dotenv";
import { AuthenticationError } from "apollo-server";
import { Resolvers } from "./graphql-types";
import { createUser, getUsers } from "./services/users";
import { getProductionConnection } from "../database/utils";

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
    users: async (_parent, args) => {
      const connection = await getProductionConnection();
      return getUsers(connection, args.options);
    }
  },
  Mutation: {
    createUser: async (_parent, args) => {
      const connection = await getProductionConnection();
      return createUser(connection, args.user);
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
