import { Resolvers } from "./graphql-types";
import { createUser, getUsers } from "./services/users";
import { Connection } from "typeorm";

export async function getResolvers(
  getConnection: () => Promise<Connection>
): Promise<Resolvers> {
  const resolvers: Resolvers = {
    Query: {
      users: async (_parent, args) => {
        const connection = await getConnection();
        return getUsers(connection, args.options);
      }
    },
    Mutation: {
      createUser: async (_parent, args) => {
        const connection = await getConnection();
        return createUser(connection, args.user);
      }
    }
  };
  return resolvers;
}
