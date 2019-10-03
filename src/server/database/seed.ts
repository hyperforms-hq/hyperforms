import { Connection } from "typeorm";
import { UserDb } from "./entity/User";
import { ADMIN_DISPLAY_NAME, ADMIN_EMAIL, ADMIN_PASSWORD } from "./constants";
import { createUser } from "../graphql/services/users";
import { UserInput } from "../graphql/graphql-types";

export function seed(connect: Connection) {
  const adminUser: UserInput = {
    displayName: ADMIN_DISPLAY_NAME,
    password: ADMIN_PASSWORD,
    email: ADMIN_EMAIL
  };
  return createUser(connect, adminUser);
}
