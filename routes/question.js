const express = require("express");
const {
  getQuestions,
  getQuestion,
  createQuestion,
} = require("../controllers/question");
// const { create } = require("../models/question");

const router = express.Router();

router.route("/").get(getQuestions).post(createQuestion);
router.route("/:id").get(getQuestion);

module.exports = router;
