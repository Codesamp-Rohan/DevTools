const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const ToolRouter = require("./routes/ToolRoute.js");

dotenv.config();

const server = express();

const corsOptions = {
  origin: ["http://localhost:3000", "https://devtools-1tmh.onrender.com"], // frontend URI (ReactJS)
};

server.use(express.json());
server.use(bodyParser.json());
server.use(cors(corsOptions));
// server.use(cors());

server.use("/", ToolRouter);

server.get("/", (req, res) => {
  res
    .status(200)
    .json("Hello there, the website is running if you see this message.");
});

server.listen(3000, () => {
  console.log("Server listening at port 3000");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected"))
  .catch((error) => console.error("Connection failed:", error));
