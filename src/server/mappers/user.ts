import { UserDb } from "../database/entity/User";
import { User, Workspace } from "../graphql/graphql-types";
import { DbWorkspace } from "../database/entity/Workspace";

export function mapDbUserToUser(user: UserDb): User {
  return {
    id: user.id,
    email: user.email
  };
}

export function mapDbWorkspaceToWorkspace(workspace: DbWorkspace): Workspace {
  return {
    displayName: workspace.display_name,
    id: workspace.id,
    urlKey: workspace.url_key
  };
}
