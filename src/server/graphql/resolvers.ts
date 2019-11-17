import { Resolvers } from "./graphql-types";
import { createUser, getUsers } from "./services/users";
import { Connection } from "typeorm";
import { createWorkspace, getWorkspaces } from "./services/workspaces";

export async function getResolvers(
  getConnection: () => Promise<Connection>
): Promise<Resolvers> {
  const resolvers: Resolvers = {
    Query: {
      users: async (_parent, args) => {
        const connection = await getConnection();
        return getUsers(connection, args.options);
      },
      workspaces: async (_parent, args) => {
        const connection = await getConnection();
        return getWorkspaces(connection, args.options);
      }
    },
    Mutation: {
      createUser: async (_parent, args) => {
        const connection = await getConnection();
        return createUser(connection, args.user);
      },
      createWorkspace: async (_parent, args) => {
        const connection = await getConnection();
        return createWorkspace(connection, args.workspace);
      }
    }
  };
  return resolvers;
}
