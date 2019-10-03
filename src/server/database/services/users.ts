import { Connection } from "typeorm";
import { UserDb } from "../entity/User";

export async function getDbUserByEmail(
  connection: Connection,
  email: string
): Promise<UserDb | undefined> {
  const repo = await connection.getRepository(UserDb);
  return repo.findOne({ email });
}
