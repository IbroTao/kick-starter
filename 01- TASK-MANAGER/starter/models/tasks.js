const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Must provide a name"],
      trim: true,
      maxlength: [20, "Name cannot be more than 20 characters"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("tasks", taskSchema);

module.exports = { Task };
