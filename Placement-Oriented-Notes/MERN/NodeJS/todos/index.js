import express from "express";
import dotenv from "dotenv";
import ejs from "ejs";
import path from "path";
import bodyParser from "body-parser";
import { connectDB } from "./utils/index.js";

dotenv.config();
const app = express();

const db = await connectDB();

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", path.join(path.resolve("./"), "views"));
app.use(express.static("views"));

app.get("/", async (req, res) => {
  try {
    console.log(db.collections());

    console.log("todos", todos);

    res.render("index", { todos });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.get("/home", async (req, res) => {
  try {
    console.log(db.collection("todos").find({}));
    let todos = [];
    res.render("index", { todos });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.post("/home", async (req, res) => {
  console.log("Received POST request");
  console.log("Body:", req.body); // Log the request body

  let todo = {};
  todo.title = req.body.title;
  todo.desc = req.body.desc;

  console.log(todo);

  let ack = await db.collection("todos").insertMany([todo]);

  res.json(ack);
});

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
