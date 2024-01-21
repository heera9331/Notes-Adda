import Todo from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getTodos = async () => {
  try {
    connectToDb();
    const todos = await Todo.find({});
    console.log(todos);
    return todos;
  } catch (err) {
    console.log("get todos error");
    console.log(err);
  }
  return [];
};
