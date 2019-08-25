import { cleanAll, getTestConnection } from "../../../database/utils";
import { createUser } from "../users";
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
        connection.close();
      }
    });
  });
});
