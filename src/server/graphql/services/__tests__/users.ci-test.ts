import { cleanAll, getTestConnection } from "../../../database/utils";
import { createUser, getUsers } from "../users";
import UserDb from "../../../database/entity/User";

beforeAll(async () => {
  const connection = await getTestConnection();
  await cleanAll(["users"], connection);
});

afterAll(async () => {
  const connection = await getTestConnection();
  await connection.close();
});

describe("users", () => {
  describe("saveUser", () => {
    it("should work", async () => {
      const connection = await getTestConnection();

      const savedUser = await createUser(connection, {
        email: "andrerpena@gmail.com",
        password: "12345",
        name: "andrerpena",
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
        name: "andrerpena",
        display_name: "Andre Pena"
      });

      const result = await getUsers(connection);

      expect(result).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            email: "andrerpena@gmail.com",
            password: "12345"
          })
        ])
      );
    });
  });
});
