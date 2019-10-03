import { Connection } from "typeorm";
import { comparePassword } from "../../security/passwords";
import { UserDb } from "../../database/entity/User";
import { getUserByEmail } from "./users";

/**
 * Compares the given password of the given e-mail and returns true if it matches or false, otherwise
 */
export async function authenticateUser(
  connection: Connection,
  email: string,
  password: string
): Promise<string | undefined> {
  const user = await getUserByEmail(connection, email);
  if (!user || !user.password) {
    return undefined;
  }
  const passwordMatches = await comparePassword(password, (user as UserDb)
    .password as string);
  return passwordMatches ? user.id : undefined;
}
