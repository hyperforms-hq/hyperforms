import { handleAfterAll, handleBeforeAll } from "../../../ci-tests";
import { getWorkspaces } from "../workspaces";
import { getTestConnection } from "../../../database/utils";

beforeAll(handleBeforeAll);

afterAll(handleAfterAll);

describe("workspaces", () => {
  describe("getWorkspace", () => {
    it("should work", async () => {
      const connection = await getTestConnection();
      const workspaces = await getWorkspaces(connection);
      expect(workspaces).toEqual([]);
    });
  });
});

export default undefined;
