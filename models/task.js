const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const TaskScheme = new Schema (
    {
        id:Number,
        taskText:{
            type: String,
            required: true,
        },
        isDone: {
            type: Boolean,
            required: true,
            default: false
        },
        isValid: {
            type: Boolean,
            required: true,
            default: true
        }
    }
  );
  Task = mongoose.model("Task", TaskScheme);
  module.exports = Task;

