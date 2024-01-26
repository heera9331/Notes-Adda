import mongoose from "mongoose";

const connection = {};
const mongo_uri = process.env.MONGO_LOCAL;

console.log(mongo_uri);

const connectDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(mongo_uri);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
