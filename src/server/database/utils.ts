import { Connection, getConnectionManager, createConnection } from "typeorm";

export async function cleanAll(entities: string[], connection: Connection) {
  try {
    for (const entity of entities) {
      const repository = await connection.getRepository(entity);
      await repository.query(`DELETE FROM ${entity};`);
    }
  } catch (error) {
    throw new Error(`ERROR: Cleaning test db: ${error}`);
  }
}

export async function getProductionConnection(): Promise<Connection> {
  return connect("default");
}

export async function getTestConnection(): Promise<Connection> {
  return connect("test");
}

async function connect(name: string): Promise<Connection> {
  if (getConnectionManager().has(name)) {
    return getConnectionManager().get(name);
  }
  return createConnection(name);
}
