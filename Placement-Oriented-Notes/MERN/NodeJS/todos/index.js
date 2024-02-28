import express from "express";
import dotenv from "dotenv";
import ejs from "ejs";
import path from "path";
import { connectDB } from "./utils/index.js";

dotenv.config();
const app = express();

const db = await connectDB();

app.set("view engine", "ejs");
app.set("views", path.join(path.resolve("./"), "views"));
app.use(express.static("views"));

const todos = [
  { id: 1, title: "DSA", desc: "description here" },
  { id: 2, title: "Java", desc: "learn java programming" },
];

app.get("/", async (req, res) => {
  try {
    res.render("index", { todos });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.get("/home", async (req, res) => {
  try {
    res.render("index", { todos });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.post("/home", (req, res) => {});

app.get("/about", async (req, res) => {
  try {
    res.render("about");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.listen(8000, "0.0.0.0", () => {
  console.log("server started on port 8000");
});
