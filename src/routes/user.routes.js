import { Router } from "express";
import {
   getUserIDControllers,
   deleteUserControllers,
   getUsersControllers,
   postUserControllers,
   patchUserControllers,
   getUserTaskControllers,
} from "../controllers/user.controllers.js";
const userRoutes = Router();

userRoutes.get("/users", getUsersControllers);
userRoutes.post("/user", postUserControllers);
userRoutes.patch("/user/:id", patchUserControllers);
userRoutes.delete("/user/:id", deleteUserControllers);
userRoutes.get("/user/:id", getUserIDControllers);
userRoutes.get("/user/:id/tasks", getUserTaskControllers);

export default userRoutes;
