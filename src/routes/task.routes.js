import { Router } from "express";
import {
   deleteTaskControllers,
   getTaskIDControllers,
   getTasksControllers,
   postTaskControllers,
   patchTaskControllers,
} from "../controllers/task.controllers.js";
const taskRoutes = Router();

taskRoutes.get("/tasks", getTasksControllers);
taskRoutes.post("/task", postTaskControllers);
taskRoutes.patch("/task/:id", patchTaskControllers);
taskRoutes.delete("/task/:id", deleteTaskControllers);
taskRoutes.get("/task/:id", getTaskIDControllers);

export default taskRoutes;
