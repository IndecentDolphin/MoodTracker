const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const db = require("./db");
console.log("this is our db: ", db);
const moodRouter = require("./routes/mood-router");

const app = express();
const apiPort = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.use(express.static("../client/build"));
// The call below will need to be configured, why does GET work and not POST, also maybe somthing to do with the live isssue.
// We should console.log everything here to see what the hell is going on.

app.get("/", (req, res) => {
  // res.send(path.resolve(__dirname, "client", "build", "index.html")); ------Possibly this?
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html")); // This brings back the moods but cannot post
});

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", moodRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
