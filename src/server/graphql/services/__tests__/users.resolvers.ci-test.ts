import { cleanAll, getTestConnection } from "../../../database/utils";
import { createApolloServer } from "../../apollo-server";
import { createTestClient } from "apollo-server-testing";
import { ApolloServerBase } from "apollo-server-core";
import { DocumentXDocument } from "../../graphql-types";

beforeAll(async () => {
  const connection = await getTestConnection();
  await cleanAll(["users"], connection);
});

describe("users2", () => {
  describe("saveUser", () => {
    it("should work", async () => {
      const apolloServer = await createApolloServer(getTestConnection);
      const { query } = createTestClient(apolloServer as any);
      const result = await query({
        query: DocumentXDocument
      });
      expect(result).toEqual({});
    });
  });
});
