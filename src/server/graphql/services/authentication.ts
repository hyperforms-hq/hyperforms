import { Connection } from "typeorm";
import { comparePassword } from "../../security/passwords";
import { UserDb } from "../../database/entity/User";
import { getDbUserByEmail } from "../../database/services/users";

/**
 * Compares the given password of the given e-mail and returns true if it matches or false, otherwise
 */
export async function authenticateUser(
  connection: Connection,
  email: string,
  password: string
): Promise<string | undefined> {
  const dbUser = await getDbUserByEmail(connection, email);
  if (!dbUser || !dbUser.password) {
    return undefined;
  }
  const passwordMatches = await comparePassword(password, (dbUser as UserDb)
    .password as string);
  return passwordMatches ? dbUser.id : undefined;
}
