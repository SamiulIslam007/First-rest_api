const mongoose = require("mongoose");

const PostScheme = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Posts = mongoose.model("Posts", PostScheme);

module.exports = Posts;
