import { hash, compare } from "bcrypt";

export async function hashPassword(password: string): Promise<string> {
  return hash(password, 10);
}

export async function comparePassword(password: string, hash: string) {
  return compare(password, hash);
}
