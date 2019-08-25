import { UserInput, User, Maybe, QueryOptions } from "../graphql-types";
import UserDb from "../../database/entity/User";
import { Connection, FindManyOptions } from "typeorm";
import { getBasicFindOptions } from "../../database/utils";

export async function createUser(
  connection: Connection,
  userInput: UserInput
): Promise<User> {
  const user = new UserDb();
  user.email = userInput.email;
  user.password = userInput.password;

  const repo = await connection.getRepository(UserDb);
  return await repo.save(user);
}

export async function getUsers(
  connetion: Connection,
  options?: Maybe<QueryOptions>
): Promise<User[]> {
  const repo = await connetion.getRepository(UserDb);
  return repo.find({ ...getBasicFindOptions(options) });
}
