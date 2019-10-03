import { QueryOptions, User, UserInput } from "../graphql-types";
import { Connection } from "typeorm";
import { hashPassword } from "../../security/passwords";
import { UserDb } from "../../database/entity/User";

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
  return {
    id: savedUser.id,
    email: savedUser.email
  };
}

export async function getUserByEmail(
  connection: Connection,
  email: string
): Promise<UserDb | undefined> {
  const repo = await connection.getRepository(UserDb);
  return repo.findOne({ email });
}

export async function getAllUsers(connection: Connection) {
  return getUsers(connection);
}

async function getUsers(
  connection: Connection,
  options?: Partial<QueryOptions & User>
): Promise<User[]> {
  const repo = await connection.getRepository(UserDb);
  return repo.find(options);
}
