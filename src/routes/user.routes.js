import { Router } from "express";
const userRoutes = Router();

userRoutes.get("/users");
userRoutes.post("/user");
userRoutes.put("/user/:id");
userRoutes.delete("/user/:id");
userRoutes.get("/user/:id");

export default userRoutes;
