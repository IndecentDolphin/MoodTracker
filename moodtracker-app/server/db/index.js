const mongoose = require("mongoose");

mongoose
    .connect("mongodb+srv://admin:317YnDNfD3CeLuno@moodtrackercluster.dfbbc.gcp.mongodb.net/moodtracker_db?retryWrites=true&w=majority", { useNewUrlParser: true })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;

