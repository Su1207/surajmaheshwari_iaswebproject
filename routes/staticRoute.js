const express = require("express");
const Question = require("../models/question");

const router = express.Router();

router.route("/").get(async (req, res) => {
  const allQuestion = await Question.find({});
  res.render("home", {
    questions: allQuestion,
  });
});

router.route("/add-question").get((req, res) => {
  res.render("admin");
});

module.exports = router;
