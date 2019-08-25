import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./server/database/entity/User";

createConnection()
  .then(async connection => {})
  .catch(error => console.log(error));
