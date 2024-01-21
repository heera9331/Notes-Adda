import { Todo } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    connectToDb();

    const todos = await Todo.find();
    return NextResponse.json(todos);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};
