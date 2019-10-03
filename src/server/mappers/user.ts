import { UserDb } from "../database/entity/User";
import { User } from "../graphql/graphql-types";

export function mapDbUserToUser(user: UserDb): User {
  return {
    id: user.id,
    email: user.email
  };
}
