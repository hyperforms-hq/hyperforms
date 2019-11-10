import { Connection } from "typeorm";
import Maybe from "graphql/tsutils/Maybe";
import { QueryOptions, Workspace, WorkspaceInput } from "../graphql-types";
import { getBasicFindOptions } from "../../database/utils";
import { mapDbWorkspaceToWorkspace } from "../../mappers/user";
import { DbWorkspace } from "../../database/entity/Workspace";
import { generateUrlKey } from "../../helpers/url-keys";

export async function createWorkspace(
  connection: Connection,
  workspaceInput: WorkspaceInput
): Promise<Workspace> {
  const newWorkspace = new DbWorkspace();
  newWorkspace.display_name = workspaceInput.displayName;
  newWorkspace.url_key = generateUrlKey();
  const repo = await connection.getRepository(DbWorkspace);
  const savedWorkspace = await repo.save(newWorkspace);
  return mapDbWorkspaceToWorkspace(savedWorkspace);
}

export async function getWorkspaces(
  connection: Connection,
  options?: Maybe<QueryOptions>
): Promise<Workspace[]> {
  const repo = await connection.getRepository(DbWorkspace);
  return (await repo.find({ ...getBasicFindOptions(options) })).map(
    mapDbWorkspaceToWorkspace
  );
}
