import { Router } from "express";
import {
   getPrioritiesControllers,
   deletePriorityControllers,
   getPriorityIDControllers,
   postPriorityControllers,
   putPriorityControllers,
   getPriorityTaskControllers,
} from "../controllers/priority.controllers.js";
const priorityRoutes = Router();

priorityRoutes.get("/priorities", getPrioritiesControllers);
priorityRoutes.post("/priority", postPriorityControllers);
priorityRoutes.put("/priority/:id", putPriorityControllers);
priorityRoutes.delete("/priority/:id", deletePriorityControllers);
priorityRoutes.get("/priority/:id", getPriorityIDControllers);
//filtro de prioridad por id para encontrar tareas
priorityRoutes.get("/priority/:id/tasks", getPriorityTaskControllers);

export default priorityRoutes;
