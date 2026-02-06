const Task = require("../models/task.schema")

async function updateTask(req, res) {
    try {
        const { id } = req.params
        const { matter, dateIssued, endDate, description } = req.body

        const task = await Task.findById(id)

        if (!task) {
            return res.status(404).json({message: "Atividade não encontrada."})
        }

        if (matter !== undefined) task.matter = matter
        if (dateIssued !== undefined) task.dateIssued = dateIssued
        if (endDate !== undefined) task.endDate = endDate
        if (description !== undefined) task.description = description

        const updatedTask = await task.save()

        return res.status(200).json(updatedTask)
    } catch (error) {
        console.error("Erro ao atualizar atividade:", error)
        return res.status(500).json({ message: "Erro interno do servidor" })
    }
}
module.exports = updateTask