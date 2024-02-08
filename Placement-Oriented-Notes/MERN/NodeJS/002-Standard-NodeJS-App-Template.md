**server.js**

```jsx
import express from "express";
import mongoose from "mongoose";
import Student from "./models/Student.js";

const app = express();
app.use(express.json());

// Middleware for parsing URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

const connectDB = async () => {
  mongoose.connect("mongodb://127.0.0.1:27017/COLLECT_COUNSELLING");
  const sampleStudents = [
    {
      fname: "John",
      lname: "Doe",
      email: "john.doe@example.com",
      mobile: 1234567890,
    },
    {
      fname: "Jane",
      lname: "Smith",
      email: "jane.smith@example.com",
      mobile: 9876543210,
    },
    {
      fname: "Alice",
      lname: "Johnson",
      email: "alice.johnson@example.com",
      mobile: 5555555555,
    },
  ];

  //   Student.insertMany(sampleStudents);
  console.log(
    Student.find({})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("error");
      })
  );
};

app.get("/", (req, res) => {
  res.send("reply from server");
});

app.listen(8000, () => {
  console.log("Server has been started on port 8000");
  connectDB();
  console.log("connections success");
});
```

**package.json** 

```jsx
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.5.3",
    "nodemon": "^3.0.1"
  }
}
```

**Database Connection**

```jsx
import mongoose from "mongoose"; 
const connection = {};

const connectToDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;

const connectDB = async () => {
  mongoose.connect("mongodb://127.0.0.1:27017/COLLECT_COUNSELLING");
  const sampleStudents = [
    {
      fname: "John",
      lname: "Doe",
      email: "john.doe@example.com",
      mobile: 1234567890,
    },
    {
      fname: "Jane",
      lname: "Smith",
      email: "jane.smith@example.com",
      mobile: 9876543210,
    },
    {
      fname: "Alice",
      lname: "Johnson",
      email: "alice.johnson@example.com",
      mobile: 5555555555,
    },
  ];

  //   Student.insertMany(sampleStudents);
  console.log(
    Student.find({})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("error");
      })
  );
};
```

**Schema+model**

```jsx
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: {
    type: String,
    unique: true,
  },
  mobile: {
    type: Number,
    unique: true,
    required: true,
  },
});

const Student = mongoose.model("students", studentSchema);

export default Student;
```
