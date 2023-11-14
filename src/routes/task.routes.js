import { Router } from "express";
import {
   deleteTaskControllers,
   getTaskIDControllers,
   getTasksControllers,
   postTaskControllers,
   putTaskControllers,
} from "../controllers/task.controllers.js";
const taskRoutes = Router();

taskRoutes.get("/tasks", getTasksControllers);
taskRoutes.post("/task", postTaskControllers);
taskRoutes.put("/task/:id", putTaskControllers);
taskRoutes.delete("/task/:id", deleteTaskControllers);
taskRoutes.get("/task/:id", getTaskIDControllers);

export default taskRoutes;
