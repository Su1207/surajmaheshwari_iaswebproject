const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    questionText: {
      type: String,
      require: true,
    },
    answer: {
      type: String,
      require: true,
    },
    // image: {
    //   type: String,
    // }, // Store image file paths or use GridFS for images
    url: {
      type: String,
      require: true,
    },
    submitTime: {
      type: Date,
      default: Date.now,
    },
    subject: {
      type: String,
      require: true,
    },
    topic: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
