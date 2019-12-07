import { cleanAll, getTestConnection } from "./database/utils";

/**
 * Cleans up the test database
 */
export const handleBeforeEach = async () => {
  const connection = await getTestConnection();
  await cleanAll(["users", "workspaces"], connection);
};

/**
 * Closes the connection
 */
export const handleAfterAll = async () => {
  const connection = await getTestConnection();
  await connection.close();
};
