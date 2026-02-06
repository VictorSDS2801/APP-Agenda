const mongoose = require("mongoose")

const newTask = new mongoose.Schema({
    matter: {
        type: String,
        required: true
    },
    dateIssued: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    description: {
        type: String
    },
    status: {
        type: Boolean,
        default: false
    }
})

const Task = mongoose.model("task", newTask)

module.exports = Task