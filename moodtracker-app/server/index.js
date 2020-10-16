const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require('./db')
const moodRouter = require("./routes/mood-router");

const app = express();
const apiPort = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

//Serve Static Assets in production 
//set static folder
app.use(express.static('../client/build'));
app.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", moodRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
