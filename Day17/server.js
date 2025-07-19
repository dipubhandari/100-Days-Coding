import express from "express";
import http from "http";
import dbConnect from "./database/database.js";
// import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";

const PORT = 5000;
const app = express();
const server = http.createServer(app);
const DATABASE_URL =
  process.env.MONGO_URL ||
  "mongodb+srv://livexettri:xettrilive@myapp.oosmo9o.mongodb.net/?retryWrites=true&w=majority&appName=MyApp";

// db connect
dbConnect(DATABASE_URL);

// this middleware BEFORE your routes
app.use(express.json());
// Routes
app.use("/", userRoutes);

server.listen(PORT, () => {
  console.log("The app is listening");
});
