import { getTestConnection } from "../../utils";
import { createUser, getUsers } from "../../../graphql/services/users";
import { UserDb } from "../../entity/User";
import { handleAfterAll, handleBeforeEach } from "../../../ci-tests";

beforeEach(handleBeforeEach);

afterAll(handleAfterAll);

describe("users", () => {
  describe("saveUser", () => {
    it("should work", async () => {
      const connection = await getTestConnection();

      const savedUser = await createUser(connection, {
        email: "andrerpena@gmail.com",
        password: "12345",
        displayName: "Andre Pena"
      });
      expect(savedUser).toMatchObject({
        email: "andrerpena@gmail.com"
      });
      const repo = connection.getRepository(UserDb);
      const result = await repo.findOne({
        where: {
          email: "andrerpena@gmail.com"
        }
      });
      expect(result).toMatchObject({
        email: "andrerpena@gmail.com",
        password: expect.any(String)
      });
    });
  });
  describe("getUsers", () => {
    it("should work", async () => {
      const connection = await getTestConnection();

      const repo = connection.getRepository(UserDb);

      await repo.insert({
        email: "andrerpena@gmail.com",
        password: "12345",
        display_name: "Andre Pena"
      });

      const result = await getUsers(connection);

      expect(result).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            email: "andrerpena@gmail.com",
            id: expect.any(String)
          })
        ])
      );
    });
  });
});
