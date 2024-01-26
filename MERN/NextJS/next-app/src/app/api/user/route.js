import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import connectDB from "../utils/db";

connectDB();

const GET = (req) => {
  NextResponse.json({ username: "hi", password: "3" });
};

// insert
const POST = (req) => {
  NextResponse.json({ username: "hi", password: "3" });
};

// update
const PUT = (req) => {
  NextResponse.json({ username: "hi", password: "3" });
};

// update
const DELETE = (req) => {
  NextResponse.json({ username: "hi", password: "3" });
};
