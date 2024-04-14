const express = require("express");
const router = express.Router();

const {
  createToolPost,
  getToolPost,
  deleteToolPost,
  updateToolPost,
} = require("../controller/ToolController.js");

router.get("/", getToolPost);
router.post("/create", createToolPost);
router.delete("/delete/:id", deleteToolPost);
router.put("/update/:id", updateToolPost);

module.exports = router;
