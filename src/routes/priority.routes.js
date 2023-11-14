import { Router } from "express";
import {
   getPrioritiesControllers,
   deletePriorityControllers,
   getPriorityIDControllers,
   postPriorityControllers,
   putPriorityControllers,
} from "../controllers/priority.controllers.js";
const priorityRoutes = Router();

priorityRoutes.get("/priorities", getPrioritiesControllers);
priorityRoutes.post("/priority", postPriorityControllers);
priorityRoutes.put("/priority/:id", putPriorityControllers);
priorityRoutes.delete("/priority/:id", deletePriorityControllers);
priorityRoutes.get("/priority/:id", getPriorityIDControllers);

export default priorityRoutes;
