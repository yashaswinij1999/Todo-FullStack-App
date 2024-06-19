const controller = require("../controller/todo.js");
const express = require("express");

const router = express.Router();

router.get("/getData", controller.getData);
router.post("/createTask", controller.createTask);
router.patch("/editTask/:id", controller.editTask);
router.get("/getTask/:id", controller.getTask);
router.delete("/deleteTask/:id", controller.deleteTask);
router.patch("/toggleTask/:id", controller.toggleIsCompleted);
module.exports = router;
