const Todo = require("../model/todoSchema");
const express = require("express");
const app = express();

exports.getData = async function (req, res) {
  const todos = await Todo.find({});
  res.send(todos);
};

exports.createTodo = async function (req, res) {
  try {
    const newTodo = await Todo.create(req.body);
    res.status(201).send("todo added successfully");
  } catch (error) {
    res.status(500).send("server error");
  }
};
