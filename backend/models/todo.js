const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required,
    },
    status: {type: Boolean, default: flase},
})

const todo = mongoose.model("todo", toDoSchema);
module.exports = todo;