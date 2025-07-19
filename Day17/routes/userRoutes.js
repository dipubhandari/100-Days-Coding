import express from "express";
import UserController from "../Controllers/User.js";

const userRoutes = express.Router();

userRoutes.get("/data", UserController.showData);

export default userRoutes;
