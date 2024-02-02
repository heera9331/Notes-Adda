// Import the Mongoose library
import mongoose from "mongoose";

// Create an object to manage the connection state
const connection = {};

// Get the MongoDB URI from the environment variables
const mongo_uri = process.env.MONGO_LOCAL;

console.log(mongo_uri);

const connectDB = async () => {
  try {
    // Check if a connection is already established
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }

    console.log("establishing a new connection");
    // If no existing connection, establish a new one
    const db = await mongoose.connect(mongo_uri);

    // Update the connection state
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    // Log any errors that occur during the connection attempt
    console.log(error);
  }
};

// Export the connectDB function as the default export of the module
export default connectDB;
