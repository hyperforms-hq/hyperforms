import { Express } from "express";
import { getProductionConnection } from "../database/utils";
import { UserSession } from "./types";
import { authenticateUser } from "../graphql/services/authentication";
import { AuthenticationResult } from "../../common/api-types/authentication-result";

export function setUpAuthenticationRoutes(app: Express) {
  app.post("/login", async (req, res) => {
    const sendError = () => {
      res.status(403);
      res.end(
        JSON.stringify(
          {
            result: "error",
            error: "email and password are required"
          } as AuthenticationResult,
          null,
          4
        )
      );
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
    } else {
      (req as any).session = {
        userId: authenticatedUserId
      } as UserSession;

      res.end(
        JSON.stringify(
          {
            result: "success",
            userId: authenticatedUserId
          } as AuthenticationResult,
          null,
          4
        )
      );
    }
  });

  app.get("/logout", (req, res) => {
    (req as any).session = null;
    res.redirect("/login");
  });
}
