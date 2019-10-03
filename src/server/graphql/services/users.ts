import { QueryOptions, User, UserInput } from "../graphql-types";
import { Connection } from "typeorm";
import { hashPassword } from "../../security/passwords";
import { UserDb } from "../../database/entity/User";
import { mapDbUserToUser } from "../../mappers/user";
import { getBasicFindOptions } from "../../database/utils";
import Maybe from "graphql/tsutils/Maybe";

export async function createUser(
  connection: Connection,
  userInput: UserInput
): Promise<User> {
  const newUser = new UserDb();
  newUser.email = userInput.email;
  newUser.display_name = userInput.displayName;
  if (userInput.password) {
    newUser.password = await hashPassword(userInput.password);
  }
  const repo = await connection.getRepository(UserDb);
  const savedUser = await repo.save(newUser);
  return mapDbUserToUser(savedUser);
}

export async function getUsers(
  connection: Connection,
  options?: Maybe<QueryOptions>
): Promise<User[]> {
  const repo = await connection.getRepository(UserDb);
  return (await repo.find({ ...getBasicFindOptions(options) })).map(
    mapDbUserToUser
  );
}
