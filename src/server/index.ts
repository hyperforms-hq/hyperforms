import bodyParser from "body-parser";
import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "..")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// user
app.get("/api/", (req, res) => {
  res.end("hallo world");
});

// messages
// app.post('/api/messages', postMessages)
// app.put('/api/messages/:id', putMessage)

// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`Listening on port ${port}`));
