const Task = require("../models/task.schema")

async function deleteTask(req, res) {
    try {
        const { id } = req.params

        const task = await Task.findById(id)

        if (!task) {
            return res.status(404).json({message: "Atividade não encontrada."})
        }

        await task.deleteOne()
        return res.status(200).json({message: "Atividade removida com sucesso."})
    } catch (error) {
        console.error("Erro ao deletar a atividade:", error)
        return res.status(500).json({ message: "Erro interno do servidor" })
    }
}
module.exports = deleteTask