const Todo = require("../model/todoSchema");
const express = require("express");
const app = express();

exports.getData = async function (req, res) {
  const todos = await Todo.find({});
  res.send(todos);
};
