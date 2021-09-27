const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    text: { 
        type: String,
        required: false,
        default: "New task",
    },
    state: {
        type: String,
        default: "Todo",
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model("task", taskSchema);