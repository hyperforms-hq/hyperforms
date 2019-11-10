import { handleAfterAll, handleBeforeAll } from "../../../ci-tests";
import { getTestConnection } from "../../../database/utils";
import { createUser } from "../users";

beforeAll(handleBeforeAll);

afterAll(handleAfterAll);

describe("users", () => {
  describe("createUser", () => {
    it("should work", async () => {
      const connection = await getTestConnection();
      const createdUser = await createUser(connection, {
        displayName: "Andre Pena",
        email: "andre@pena.com",
        password: "super-secure-password"
      });
      expect(createdUser).toMatchObject({
        email: "andre@pena.com",
        id: expect.any(String)
      });
    });
  });
});

export default undefined;
