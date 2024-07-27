const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://Yashu:Yashu123@cluster0.rbr83rj.mongodb.net/TodoApp")
  .then(() => console.log("database connected"))
  .catch(() => console.log("failed"));

app.listen(3000, (req, res) => {
  console.log("server started");
});

const cors = require("cors");

app.use(cors());
app.use(express.json());

const router = require("./router/todo");
app.use("/todos", router);
