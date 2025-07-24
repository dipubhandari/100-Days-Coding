import express from "express";
import cors from "cors";
const app = express();
const PORT = 5000;

const api = [
  { id: 1, title: "Title 1", desc: "First desc" },
  { id: 2, title: "Title 2", desc: "Second desc" },
  { id: 3, title: "Title 3", desc: "Third desc" },
  { id: 4, title: "Title 4", desc: "Forth desc" },
];
app.use(cors());
app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/api/data", (req, res) => {
  console.log("this runs");
  res.send(api);
});

app.listen(PORT, () => {
  console.log("Application is running in port ", PORT);
});
