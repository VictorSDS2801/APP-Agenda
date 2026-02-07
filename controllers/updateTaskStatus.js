const Task = require("../models/task.schema")

async function updateTaskStatus(req, res) {
    try {
        const { id } = req.params
        const { status } = req.body

        const task = await Task.findById(id)

        if (!task) {
            return res.status(404).json({message: "Atividade não encontrada."})
        }

        task.status = status
        const updatedTask = await task.save()

        return res.status(200).json(updatedTask)
    } catch (error) {
        console.error("Erro ao atualizar status da atividade:", error)
        return res.status(500).json({ message: "Erro interno do servidor" })
    }
}

module.exports = updateTaskStatus
