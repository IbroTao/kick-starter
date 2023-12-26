const { Task } = require("../models/tasks");
const asyncWrapper = require("../middlewares/async");
const { createCustomError } = require("../errors/customError");

const createTask = asyncWrapper(async (req, res) => {
  const { name, completed } = req.body;
  const task = await Task.create({ name, completed });
  res.status(201).json(task);
});

const getAllTasks = asyncWrapper(async (req, res) => {
  const task = await Task.find();
  res.status(200).json(task);
});

const getATask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(
      createCustomError(`No task found with this ID: ${taskID}`, 404)
    );
  }
  res.status(200).json(task);
});

const updateTask = asyncWrapper(async (req, res) => {
  const { name } = req.body;
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate(
    {
      _id: taskID,
    },
    {
      name,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  if (!task) {
    return next(
      createCustomError(`No task found with this ID: ${taskID}`, 404)
    );
  }
  res.status(200).json(task);
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(
      createCustomError(`No task found with this ID: ${taskID}`, 404)
    );
  }
  res.status(200).json({ task: null });
});

module.exports = {
  createTask,
  getAllTasks,
  getATask,
  updateTask,
  deleteTask,
};
