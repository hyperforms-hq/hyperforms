import { handleAfterAll, handleBeforeAll } from "../../../ci-tests";
import { createWorkspace, getWorkspaces } from "../workspaces";
import { getTestConnection } from "../../../database/utils";

beforeAll(handleBeforeAll);

afterAll(handleAfterAll);

describe("workspaces", () => {
  describe("createWorkspace", () => {
    it("should work", async () => {
      const connection = await getTestConnection();
      const workspace = await createWorkspace(connection, {
        displayName: "my-workspace"
      });
      expect(workspace).toMatchObject({
        displayName: "my-workspace"
      });
      expect(workspace.id).toHaveLength(36);
      expect(workspace.urlKey).toHaveLength(10);
    });
  });
  describe("getWorkspace", () => {
    it("should work", async () => {
      const connection = await getTestConnection();
      const workspaces = await getWorkspaces(connection);
      expect(workspaces).toEqual([]);
    });
  });
});

export default undefined;
