import express from "express";
import UserController from "../Controllers/User.js";

const userRoutes = express.Router();

userRoutes.post("/test", UserController.showData);
userRoutes.post("/create", UserController.createUser);

export default userRoutes;
