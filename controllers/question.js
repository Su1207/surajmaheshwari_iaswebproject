const Question = require("../models/question");
const asyncHandler = require("express-async-handler");

// async function handleSubmit(req, res) {
//   await Question.create({
//     title: req.body.title,
//     questionText: req.body.questionText,
//     answer: req.body.answer,
//     image: req.file ? req.file.path : null, // Check if a file was uploaded
//     url: req.body.url,
//     submitTime: new Date(req.body.submitTime),
//     subject: req.body.subject,
//     topic: req.body.topic,
//   });

//   //   newQuestion.save((err) => {
//   //     if (err) {
//   //       console.error(err);
//   //       res.send("Error saving the question.");
//   //     } else {
//   //       res.send("Question added successfully.");
//   //     }
//   //   });
//   return res.redirect("/");
// }

const getQuestions = asyncHandler(async (req, res) => {
  const Questions = await Question.find({});
  res.render("home", {
    questions: Questions,
  });
  // res.status(200).json(Questions);
});

// const getContact = (req, res) => {
//   console.log("The request body is:", req.body);
//   const { name, Number } = req.body;
//   if (!name || !Number) {
//     res.status(400);
//     throw new Error("All fields are mandatory");
//   }
//   res.status(200).json({ message: "Get the contacts" });
// };

const createQuestion = asyncHandler(async (req, res) => {
  const { title, questionText, answer, url, submitTime, subject, topic } =
    req.body;
  if (!title || !questionText || !answer || !url || !subject || !topic) {
    res.status(400);
    throw new Error("All Fields are mandatory");
  }

  const questions = await Question.create({
    title,
    questionText,
    answer,
    url,
    submitTime,
    subject,
    topic,
  });
  res.status(201).json(questions);
});

const getQuestion = asyncHandler(async (req, res) => {
  const question = await Question.findById(req.params.id);
  if (!question) {
    res.status(404);
    throw new Error("Question not found");
  }
  res.status(201).json(question);
});

module.exports = { getQuestions, getQuestion, createQuestion };
