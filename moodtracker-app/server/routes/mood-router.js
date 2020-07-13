const express = require("express");

const MoodCtrl = require("../controllers/mood-ctrl");

const router = express.Router();

router.post("/mood", MoodCtrl.createMood);
router.put("/mood/:id", MoodCtrl.updateMood);
router.delete("/mood/:id", MoodCtrl.deleteMood);
router.get("/mood/:id", MoodCtrl.getMoodById);
router.get("/moods", MoodCtrl.getMood);

module.exports = router;
