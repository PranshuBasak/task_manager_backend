const express = require("express");
const Task = require("../model/taskModel");
const {createTask, getAllTask, getTask, deleteTask, updateTask, updatePatchTask, deleteAllTask} = require("../controllers/taskController")
const router = express.Router();

// Read/GET
router.get("/", getAllTask);
router.get("/:id", getTask);

//Create Task/
router.post("/", createTask);

//Delete Task
router.delete("/:id", deleteTask);
router.delete("/", deleteAllTask);

//Update Task| PATCH & PUT
router.route("/:id").put(updateTask).patch(updatePatchTask); // Way to compress common router

module.exports = router;