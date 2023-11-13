const express = require("express");
// const mongoose = require("mongoose");
// const { Question } = require("./models/question");
const questionRoute = require("./routes/question");
const path = require("path");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./dbConnect");
const staticRoute = require("./routes/staticRoute");
// const multer = require("multer"); // For handling file uploads
const dotenv = require("dotenv").config(); // Load environment variables from .env file

connectDb();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public")); // Serve static files like images
app.use(express.json());
app.use(errorHandler);

app.use("/ask-question", questionRoute);
app.use("/", staticRoute);

// set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Display the form
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// app.get("/ask-question", questionRoute);

app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));
