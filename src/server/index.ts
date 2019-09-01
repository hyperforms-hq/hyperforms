import bodyParser from "body-parser";
import express from "express";
import path from "path";
import { createApolloServer } from "./graphql/apollo-server";
import passport from "passport";
import passportLocal from "passport-local";
import { getProductionConnection } from "./database/utils";
import Bundler from "parcel-bundler";
import { isDevelopment } from "./env";

(async function() {
  const LocalStrategy = passportLocal.Strategy;

  const app = express();
  const port = process.env.PORT || 3000;

  if (isDevelopment()) {
    console.log("development mode");
    // Serve the client code through the Parcel middleware
    const entryFiles = path.join(__dirname, "../../public/index.html");
    console.log(entryFiles);
    const bundler = new Bundler(entryFiles);
    app.use(bundler.middleware());
  } else {
    console.log("production mode");
    // Serve the client code through the bundle Parcel files
    app.use(express.static(path.join(__dirname, "../dist")));
  }

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  const apolloServer = await createApolloServer(getProductionConnection);

  apolloServer.applyMiddleware({ app });

  // user
  app.get("/api/", (req, res) => {
    res.end("hallo world");
  });

  passport.use(
    new LocalStrategy(function(username, password, cb) {
      cb(null, {
        id: 1,
        name: "andrerpena"
      });
    })
  );

  passport.deserializeUser(function(id, cb) {
    cb(null, {
      id: 1,
      name: "andrerpena"
    });
  });

  passport.serializeUser(function(user, cb) {
    cb(null, (user as any).id);
  });

  app.post(
    "/authenticate",
    passport.authenticate("local", { failureRedirect: "/authenticate" }),
    (req, res) => {
      res.redirect("/good");
    }
  );

  app.use(passport.initialize());
  app.use(passport.session());

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
