import { Router } from "express";
import {
   getUserIDControllers,
   deleteUserControllers,
   getUsersControllers,
   postUserControllers,
   patchUserControllers,
   getUserIdTaskControllers,
} from "../controllers/user.controllers.js";
const userRoutes = Router();

userRoutes.get("/users", getUsersControllers);
userRoutes.post("/user", postUserControllers);
userRoutes.patch("/user/:id", patchUserControllers);
userRoutes.delete("/user/:id", deleteUserControllers);
userRoutes.get("/user/:id", getUserIDControllers);
userRoutes.get("/user/:id/tasks", getUserIdTaskControllers);

export default userRoutes;
