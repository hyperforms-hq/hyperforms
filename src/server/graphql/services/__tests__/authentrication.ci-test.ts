import { getTestConnection } from "../../../database/utils";
import { handleAfterAll, handleBeforeEach } from "../../../ci-tests";
import { authenticateUser } from "../authentication";
import { createUser } from "../users";

beforeAll(handleBeforeEach);

afterAll(handleAfterAll);

describe("authentication", () => {
  describe("authenticateUser", () => {
    it("should return undefined in case the user does not exist", async () => {
      const connection = await getTestConnection();
      const authenticatedUser = await authenticateUser(
        connection,
        "john@doesnotexist.com",
        "blablabla"
      );
      expect(authenticatedUser).toBeUndefined();
    });
    it("should return the user id in case it exists", async () => {
      const connection = await getTestConnection();
      const user = await createUser(connection, {
        email: "andre@gmail.com",
        displayName: "Andre Pena",
        password: "blablabla"
      });
      const authenticatedUser = await authenticateUser(
        connection,
        "andre@gmail.com",
        "blablabla"
      );
      expect(authenticatedUser).toEqual(user.id);
    });
  });
});
