const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Mood = new Schema(
  {
    mood_type: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("moods", Mood);
