import mongoose from "mongoose";

const connection = {};

const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(
      "mongodb+srv://heera7242:heera7242@cluster0.ikuk93s.mongodb.net/test?retryWrites=true&w=majority"
    );
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
  }
};

export { connectToDb };
