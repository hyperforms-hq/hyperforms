import { cleanAll, getTestConnection } from "../../../database/utils";
import { saveUser } from "../users";

beforeAll(async () => {
  const connection = await getTestConnection();
  await cleanAll(["users"], connection);
});

describe("users", () => {
  describe("saveUser", () => {
    it("should work", async () => {
      const connection = await getTestConnection();

      try {
        const savedUser = await saveUser(
          {
            email: "andrerpena@gmail.com",
            password: "12345"
          },
          connection
        );
        expect(savedUser).toMatchObject({
          email: "andrerpena@gmail.com"
        });
      } finally {
        connection.close();
      }
    });
  });
});
