const express = require("express");
const Task = require("../model/taskModel");
const {createTask, getAllTask, getTask, deleteTask, updateTask, updatePatchTask, deleteAllTasks} = require("../controllers/taskController")
const router = express.Router();

// Read/GET
router.get("/", getAllTask);
router.get("/:id", getTask);

//Create Task/
router.post("/", createTask);

// Delete All Tasks
router.delete("/delete-all", deleteAllTasks);
//Delete Task
router.delete("/:id", deleteTask);

//Update Task| PATCH & PUT
router.route("/:id").put(updateTask).patch(updatePatchTask); // Way to compress common router

module.exports = router;
