const Mood = require("../models/moods-model");

createMood = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a mood >:(",
    });
  }

  const mood = new Mood(body);

  if (!mood) {
    return res.status(400).json({ success: false, error: err });
  }

  mood
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: mood._id,
        message: "Mood created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Mood not created!",
      });
    });
};

updateMood = async (req, res) => {
  console.log('update', req.body)
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Mood.findOne({ _id: req.params.id }, (err, mood) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Mood not found!",
      });
    }
    mood.mood_type = body.mood_type;
    mood
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: mood._id,
          message: "Mood updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Mood not updated!",
        });
      });
  });
};

deleteMood = async (req, res) => {
  await Mood.findOneAndDelete({ _id: req.params.id }, (err, mood) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!mood) {
      return res.status(404).json({ success: false, error: `Mood not found` });
    }

    return res.status(200).json({ success: true, data: mood });
  }).catch((err) => console.log(err));
};

getMoodById = async (req, res) => {
  await Mood.findOne({ _id: req.params.id }, (err, mood) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!mood) {
      return res.status(404).json({ success: false, error: `Mood not found` });
    }
    return res.status(200).json({ success: true, data: mood });
  }).catch((err) => console.log(err));
};

getMood = async (req, res) => {
  await Mood.find({}, (err, mood) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!mood.length) {
      return res.status(404).json({ success: false, error: `Mood not found` });
    }
    return res.status(200).json({ success: true, data: mood });
  }).catch((err) => console.log(err));
};

module.exports = {
  createMood,
  updateMood,
  deleteMood,
  getMood,
  getMoodById,
};
