const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

// Import routes
const postRoute = require("./routes/posts");
app.use("/posts", postRoute);

// Middlewares
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

// Connect to DB

mongoose.connect("mongodb://localhost:27017/rest", () => {
  console.log("Connected DB!");
});

// How to listen to server
app.listen(3000);
