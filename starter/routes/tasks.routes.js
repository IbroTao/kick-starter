const { Router } = require("express");
const {
  createTask,
  getAllTasks,
  getATask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");
const router = Router();

router.post("/", createTask);
router.get("/", getAllTasks);
router.get("/:id", getATask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
