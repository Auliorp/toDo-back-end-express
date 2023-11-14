import { Router } from "express";
import {
   getUserIDControllers,
   deleteUserControllers,
   getUsersControllers,
   postUserControllers,
   putUserControllers,
} from "../controllers/user.controllers.js";
const userRoutes = Router();

userRoutes.get("/users", getUsersControllers);
userRoutes.post("/user", postUserControllers);
userRoutes.put("/user/:id", putUserControllers);
userRoutes.delete("/user/:id", deleteUserControllers);
userRoutes.get("/user/:id", getUserIDControllers);

export default userRoutes;
