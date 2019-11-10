import { Connection } from "typeorm";
import Maybe from "graphql/tsutils/Maybe";
import { QueryOptions, Workspace } from "../graphql-types";
import { getBasicFindOptions } from "../../database/utils";
import { mapDbWorkspaceToWorkspace } from "../../mappers/user";
import { DbWorkspace } from "../../database/entity/Workspace";

export async function getWorkspaces(
  connection: Connection,
  options?: Maybe<QueryOptions>
): Promise<Workspace[]> {
  const repo = await connection.getRepository(DbWorkspace);
  return (await repo.find({ ...getBasicFindOptions(options) })).map(
    mapDbWorkspaceToWorkspace
  );
}
