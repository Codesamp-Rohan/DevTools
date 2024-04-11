const { timeStamp } = require("console");
const mongoose = require("mongoose");
const Schema = require("mongoose");

const ToolSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    image: {
      type: String,
    },
    about: {
      type: String,
    },
    url: {
      type: String,
    },
    category: {
      type: String,
    },
  },
  {
    timeStamp: true,
  }
);
const Tool = mongoose.model("Tool", ToolSchema);

module.exports = Tool;
