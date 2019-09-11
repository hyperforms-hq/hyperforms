import { Express } from "express";

export function setUpAuthenticationRoutes(app: Express) {
  app.post("/login", (req, res) => {
    const userSession = {
      userId: 1
    };
    (req as any).session = userSession;
    res.send({
      result: "success",
      user: userSession
    });
  });

  app.get("/logout", (req, res) => {
    (req as any).session = null;
    res.redirect("/login");
  });
}
