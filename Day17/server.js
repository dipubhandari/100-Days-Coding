import express from "express";
import http from "http";
import dbConnect from "./Database/database.js";
// import mongoose from "mongoose";
import userRoutes from "./Routes/userRoutes.js";

const app = express();
const server = http.createServer(app);
const DATABASE_URL = process.env.MONGO_URL || "mongodb://localhost:27017";

// db connect
dbConnect(DATABASE_URL);

// Routes
app.use("/", userRoutes);

server.listen(() => {
  console.log("The app is listening");
});
