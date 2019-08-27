import { cleanAll, getTestConnection } from "../../../database/utils";
import { createUser, getUsers } from "../users";
import UserDb from "../../../database/entity/User";

beforeAll(async () => {
  const connection = await getTestConnection();
  await cleanAll(["users"], connection);
});

describe("users", () => {
  describe("saveUser", () => {
    it("should work", async () => {
      const connection = await getTestConnection();

      try {
        const savedUser = await createUser(connection, {
          email: "andrerpena@gmail.com",
          password: "12345"
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
          password: "12345"
        });
      } finally {
        await connection.close();
      }
    });
  });
  describe("getUsers", () => {
    it("should work", async () => {
      const connection = await getTestConnection();

      try {
        const repo = connection.getRepository(UserDb);

        await repo.insert({
          email: "andrerpena@gmail.com",
          password: "12345"
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
      } finally {
        await connection.close();
      }
    });
  });
});
