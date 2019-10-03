import {
  Connection,
  getConnectionManager,
  createConnection,
  FindManyOptions
} from "typeorm";
import { QueryOptions, Maybe } from "../graphql/graphql-types";

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

/**
 * Return basic TypeORM find options based on basic GraphQL options
 */
export function getBasicFindOptions<T>(
  options?: Maybe<QueryOptions>
): FindManyOptions<T> {
  if (!options) {
    return {};
  }
  return {
    skip: options.offset || undefined,
    take: options.limit || undefined
  };
}

export function mergeFindOptions(...params: any[]) {}
