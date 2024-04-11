const express = require("express");
const router = express.Router();

const {
  createToolPost,
  getToolPost,
  deleteToolPost,
} = require("../controller/ToolController.js");

router.get("/", getToolPost);
router.post("/create", createToolPost);
router.delete("/delete/:id", deleteToolPost);

module.exports = router;
