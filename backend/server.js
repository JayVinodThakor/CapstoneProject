const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root22",
  database: "event_db"
});

db.connect((err) => {
  if (err) {
    console.log("❌ DB ERROR:", err);
  } else {
    console.log("MySQL Connected ✅");
  }
});

app.post("/register", (req, res) => {
  const { fullname, email, age, course, event, comments } = req.body;

  const sql = `
    INSERT INTO registrations 
    (fullname, email, age, course, event, comments) 
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [fullname, email, age, course, event, comments], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error saving data ❌");
    }
    res.send("Registration Successful ✅");
  });
});

app.get("/registrations", (req, res) => {
  db.query("SELECT * FROM registrations", (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error fetching data ❌");
    }
    res.json(result);
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} 🚀`);
});