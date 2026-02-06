const Task = require("../models/task.schema")

async function createTask(req, res) {
    try {
        const { matter, dateIssued, endDate, description, status } = req.body

        const newTask = new Task({matter, dateIssued, endDate, description, status})
        const savedTask = await newTask.save()

        return res.status(201).json(savedTask)
    } catch (error) {
        if (error.name === "ValidationError") {
            return res.status(400).json({
                message: "Dados inválidos",
                error: error.message
            })
        }

        console.error("Erro ao criar a atividade:", error)

        return res.status(500).json({
            message: "Erro interno do servidor"
        })
    }
}

module.exports = createTask