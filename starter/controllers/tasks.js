const { Task } = require("../models/tasks");
const asyncWrapper = require('../middlewares/async')

const createTask = asyncWrapper(async (req, res) => 
    const { name, completed } = req.body;
    const task = await Task.create({ name, completed });
    res.status(201).json(task);
});

const getAllTasks = asyncWrapper(async (req, res) => {
    const task = await Task.find();
    res.status(200).json(task);
});

const getATask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      res.status(404).json({ msg: `No task found with this ID: ${taskID}` });
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
      }
    );
    if (!task) {
      res.status(404).json(`No task found with this ID: ${taskID}`);
    }
    res.status(200).json(task);
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      res.status(404).json(`No task found with this ID: ${taskID}`);
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
