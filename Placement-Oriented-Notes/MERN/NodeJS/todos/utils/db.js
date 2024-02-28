import { MongoClient } from "mongodb";

// Connection URL
const url = process.env.MONGO || "mongodb://localhost:27017";
console.log(url);
const connectDB = async () => {
  // Create a new MongoClient
  const client = new MongoClient(url);

  // Connect to the MongoDB server
  let conn = await client.connect();

  if (conn) {
    console.log("database connect");

    return conn.db("test");
  } else {
    console.log("connection error");
  }

  return null;
};
  
export default connectDB;
