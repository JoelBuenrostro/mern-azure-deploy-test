import { Router } from "express";
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskSchema } from "../schemas/task.schema.js";

import {
    createTask,
    deleteTask,
    getTask,
    getTasks,
    updateTask,
  } from "../controllers/tasks.controllers.js";

const router = Router();

router.get("/tasks", auth, getTasks);

router.post("/tasks", auth, validateSchema(createTaskSchema), createTask);

router.get("/tasks/:id", auth, getTask);

router.put("/tasks/:id", auth, updateTask);

router.delete("/tasks/:id", auth, deleteTask);

export default router;
