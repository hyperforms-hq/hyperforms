import { cleanAll, getTestConnection } from "./database/utils";

export const handleBeforeAll = async () => {
  const connection = await getTestConnection();
  await cleanAll(["users"], connection);
};

export const handleAfterAll = async () => {
  const connection = await getTestConnection();
  await connection.close();
};
