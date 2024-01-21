import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  title: { type: String, required: true },
  desc: { type: String },
});

const Todo = mongoose.models.todo || mongoose.model("todo", todoSchema);

export { Todo };
