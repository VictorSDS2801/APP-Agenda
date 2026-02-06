const Task = require("../models/task.schema")

async function getTasks(req, res) {
    try {
        const { day, month, matter, status } = req.query
        const filter = {}

        if (day && month) {
           const year = new Date().getFullYear()

            const startDate = new Date(Date.UTC(year, Number(month) - 1, Number(day), 0, 0, 0, 0))
            const endDate = new Date(Date.UTC(year, Number(month) - 1, Number(day) + 1, 0, 0, 0, 0))

            filter.endDate = { $gte: startDate, $lt: endDate }
        }


        if (matter) {
            filter.matter = { $regex: matter, $options: "i" }
        }

        if (status !== undefined) {
            filter.status = status === "true"
        }

        const tasks = await Task.find(filter)

        return res.status(200).json(tasks)

    } catch (error) {
        console.error("Erro ao buscar atividades:", error)
        return res.status(500).json({ message: "Erro interno do servidor" })
    }
}

module.exports = getTasks
