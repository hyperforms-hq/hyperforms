import { importSchema } from "graphql-import";
import { gql } from "apollo-boost";
import { Request } from "express";
import { config } from "dotenv";
import { Connection } from "typeorm";
import { getResolvers } from "./resolvers";
import { ApolloServer } from "apollo-server-express";
import { HyperformsContext } from "./hyperforms-context";

config();

const typeDefs = gql(importSchema("src/server/graphql/schema.graphql"));

// @ts-ignore
export function getContext({ req }: { req: Request }) {
  const context: HyperformsContext = {
    authorizationHeader: req.header("Authorization")
  };
  return context;
}

export async function createApolloServer(
  getConnection: () => Promise<Connection>
): Promise<ApolloServer> {
  return new ApolloServer({
    typeDefs,
    resolvers: (await getResolvers(getConnection)) as any,
    playground: true,
    introspection: true,
    context: getContext
  });
}
