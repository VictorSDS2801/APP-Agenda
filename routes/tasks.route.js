const express = require("express")
const router = express.Router()

const createTask = require("../controllers/createTask")
const deleteTask = require("../controllers/deleteTask")
const getTasks = require("../controllers/getTasks")
const updateTask = require("../controllers/updateTask")
const updateTaskStatus = require("../controllers/updateTaskStatus")

router.post("/tasks", createTask)
router.get("/tasks", getTasks)
router.patch("/tasks/:id", updateTask)
router.patch("/tasks/:id/status", updateTaskStatus)
router.delete("/tasks/:id", deleteTask)

module.exports = router