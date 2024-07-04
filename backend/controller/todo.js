const Todo = require("../model/todoSchema");
const express = require("express");
const app = express();

exports.getData = async function (req, res) {
  const todos = await Todo.find({});
  res.send(todos);
};

exports.createTask = async function (req, res) {
  try {
    const newTodo = await Todo.create(req.body);
    res.status(201).send("todo added successfully");
  } catch (error) {
    res.status(500).send("server error");
  }
};

exports.editTask = async function (req, res) {
  try {
    const { id } = req.params;
    const updateTodo = await Todo.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).send("updated successfully");
  } catch {
    res.status(500).send("server error");
  }
};

exports.getTask = async function (req, res) {
  try {
    const { id } = req.params;
    const todo = await Todo.findById({ _id: id });
    res.status(200).send(todo);
  } catch (error) {
    res.status(400).send("unable to find todo");
  }
};

exports.deleteTask = async function (req, res) {
  try {
    const { id } = req.params;
    const removedTodo = await Todo.findByIdAndDelete({ _id: id });
    res.status(200).send(removedTodo);
  } catch (error) {
    res.status(400).send("unable to delete task");
  }
};

exports.toggleIsCompleted = async function (req, res) {
  try {
    const { id } = req.params;
    console.log(req.body);
    const toggledTask = await Todo.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).send(toggledTask);
  } catch (error) {
    res.status(400).send("unable to toggle task");
  }
};
