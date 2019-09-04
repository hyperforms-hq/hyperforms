import express from "express";
import path from "path";
import { createApolloServer } from "./graphql/apollo-server";
import { getProductionConnection } from "./database/utils";
import Bundler from "parcel-bundler";
import { isDevelopment } from "./env";
import cookieSession from "cookie-session";

(async function() {
  const app = express();
  const port = process.env.PORT || 3000;

  const apolloServer = await createApolloServer(getProductionConnection);
  apolloServer.applyMiddleware({ app });

  app.use(
    cookieSession({
      name: "session",
      secret: "somerandonstuffs",
      maxAge: 365 * 24 * 60 * 60 * 1000
    })
  );

  app.use((req, res, next) => {
    console.log(req.headers["Accept"]);
    // if(req.path.endsWith(".s"))
    // if((!req.session || !req.session.userId) && req.path !== "/login") {
    //   res.redirect("/login");
    // }
    next();
  });

  if (isDevelopment()) {
    console.log("development mode");
    // Serve the client code through the Parcel middleware
    const entryFiles = path.join(__dirname, "../../public/index.html");
    console.log(entryFiles);
    const bundler = new Bundler(entryFiles, {
      publicUrl: "/static"
    });
    app.use(bundler.middleware());
  } else {
    console.log("production mode");
    // Serve the client code through the bundle Parcel files
    app.use("/static", express.static(path.join(__dirname, "../dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../dist/index.html"));
    });
  }

  // tslint:disable-next-line:no-console
  app.listen(port, () => {
    console.log(
      `Hyperforms in running in ${
        isDevelopment() ? "development" : "production"
      } mode`
    );
    console.log(`Hyperforms is listening at http://localhost:${port}`);
  });
})();
