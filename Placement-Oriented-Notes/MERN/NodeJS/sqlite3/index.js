import sqlite3 from "sqlite3";

// Connect to SQLite database
const db = new sqlite3.Database("./data/database.db", (err) => {
  if (err) {
    console.error("Error connecting to database:", err.message);
  } else {
    console.log("Connected to the SQLite database.");
  }
});

const query = `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE
)`;

// Create users table
db.run(query, (err) => {
  if (err) {
    console.error("Error creating table:", err.message);
  } else {
    console.log("Table created successfully.");
  }
});

// Insert data into users table
db.run(
  `
    INSERT INTO users (name, email) VALUES (?, ?)
`,
  ["John Doe", "hohn@example.com"],
  (err) => {
    if (err) {
      console.error("Error inserting data:", err.message);
    } else {
      console.log("Data inserted successfully.");
    }
  }
);

// Query data from users table
db.all(
  `
    SELECT * FROM users
`,
  (err, rows) => {
    if (err) {
      console.error("Error querying data:", err.message);
    } else {
      rows.forEach((row) => {
        console.log(row);
      });
    }
  }
);

// Close database connection
db.close((err) => {
  if (err) {
    console.error("Error closing database:", err.message);
  } else {
    console.log("Database connection closed.");
  }
});
