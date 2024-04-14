const Tool = require("../models/TourModel.js");
const { v4: uuidv4 } = require("uuid");

const formatToolDataToSend = (tool) => {
  return {
    id: tool.id,
    title: tool.title,
    image: tool.image,
    about: tool.about,
    url: tool.url,
    category: tool.category,
    date: tool.date,
    paid: tool.paid,
  };
};

const getToolPost = async (req, res) => {
  try {
    const tools = await Tool.find(req.body);
    res.status(200).json(tools);
  } catch (error) {
    res.status(500).json({ message: "Error getting the tool post" });
  }
};

const createToolPost = async (req, res) => {
  try {
    const { title, image, about, url, category, date, paid } = req.body;

    const existingTool = await Tool.findOne({ url });
    if (existingTool) {
      return res.status(400).json({ message: "This URL is already in use." });
    }

    const id = uuidv4();

    const newTool = new Tool({
      id,
      title,
      image,
      about,
      url,
      category,
      date,
      paid,
    });

    const savedTool = await newTool.save();
    const formattedData = formatToolDataToSend(savedTool);

    res.status(200).json(formattedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteToolPost = async (req, res) => {
  try {
    const { id } = req.params;
    const tool = await Tool.findByIdAndDelete(id);
    res.status(200).json("Tool deleted successfully...");
  } catch (error) {
    res.status(500).json({ Message: error.message });
  }
};

const updateToolPost = async (req, res) => {
  try {
    let updateData = {
      title: req.body.title,
      image: req.body.image,
      about: req.body.about,
      url: req.body.url,
      category: req.body.category,
      date: req.body.date,
      paid: req.body.paid,
    };

    let updateTool = await Tool.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });
    res.status(200).json(updateTool);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createToolPost,
  getToolPost,
  deleteToolPost,
  updateToolPost,
};
