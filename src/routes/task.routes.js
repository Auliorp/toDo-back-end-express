import { Router } from "express";
const taskRoutes = Router();

taskRoutes.get("/tasks");
taskRoutes.post("/task");
taskRoutes.put("/task/:id");
taskRoutes.delete("/task/:id");
taskRoutes.get("/task/:id");

export default taskRoutes;
