import { Router } from "express";
const priorityRoutes = Router();

priorityRoutes.get("/priorities");
priorityRoutes.post("/priority");
priorityRoutes.put("/priority/:id");
priorityRoutes.delete("/priority/:id");
priorityRoutes.get("/priority/:id");

export default priorityRoutes;
