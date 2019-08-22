import bodyParser from "body-parser";
import express from "express";
import path from "path";
import { apolloServer } from "./graphql/apollo-server";
import passport from "passport";
import passportLocal from "passport-local";
import { onError } from "apollo-link-error";

const LocalStrategy = passportLocal.Strategy;

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "..")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

apolloServer.applyMiddleware({ app });

const link = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

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

app.get(
  "/authenticate",
  passport.authenticate("local", { failureRedirect: "/authenticate" }),
  (req, res) => {
    res.redirect("/good");
  }
);

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
app.listen(port, () => console.log(`Listening on port ${port}`));
