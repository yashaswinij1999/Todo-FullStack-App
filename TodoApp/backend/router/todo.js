const controller = require("../controller/todo.js");
const express = require("express");

const router = express.Router();

router.get("/getData", controller.getData);
router.post("/createTodo", controller.createTodo);

module.exports = router;
