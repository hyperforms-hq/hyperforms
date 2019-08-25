import { UserInput, User } from "../graphql-types";
import UserDb from "../../database/entity/User";
import { Connection } from "typeorm";

export async function saveUser(
  userInput: UserInput,
  connection: Connection
): Promise<User> {
  const user = new UserDb();
  user.email = userInput.email;
  user.password = userInput.password;

  const repo = await connection.getRepository(UserDb);
  return await repo.save(user);
}
