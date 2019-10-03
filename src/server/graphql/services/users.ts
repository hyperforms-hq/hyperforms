import { UserInput, User, Maybe, QueryOptions } from "../graphql-types";
import { Connection } from "typeorm";
import { getBasicFindOptions } from "../../database/utils";
import { hashPassword } from "../../security/passwords";
import { UserDb } from "../../database/entity/User";

export async function createUser(
  connection: Connection,
  userInput: UserInput
): Promise<User> {
  const user = new UserDb();
  user.email = userInput.email;
  user.display_name = userInput.displayName;
  if (userInput.password) {
    user.password = await hashPassword(userInput.password);
  }
  const repo = await connection.getRepository(UserDb);
  return await repo.save(user);
}

export async function getUsers(
  connection: Connection,
  options?: Maybe<QueryOptions>
): Promise<User[]> {
  const repo = await connection.getRepository(UserDb);
  return repo.find({ ...getBasicFindOptions(options) });
}
