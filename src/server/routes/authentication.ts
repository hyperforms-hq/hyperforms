import { Express } from "express";
import { getProductionConnection } from "../database/utils";
import { comparePassword, hashPassword } from "../security/passwords";
import { UserDb } from "../database/entity/User";
import { UserSession } from "./types";
import { authenticateUser } from "../graphql/services/authentication";

export function setUpAuthenticationRoutes(app: Express) {
  app.post("/login", async (req, res) => {
    const sendError = () => {
      res.status(403);
      res.end({
        error: "email and password are required"
      });
    };

    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password) {
      sendError();
    }
    const connection = await getProductionConnection();
    const authenticatedUserId = await authenticateUser(
      connection,
      email,
      password
    );

    if (!authenticatedUserId) {
      sendError();
    }

    (req as any).session = {
      userId: authenticatedUserId
    } as UserSession;

    res.send({
      result: "success",
      userId: authenticatedUserId
    });
  });

  app.get("/logout", (req, res) => {
    (req as any).session = null;
    res.redirect("/login");
  });
}
