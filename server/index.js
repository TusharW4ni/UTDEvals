const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const dotenv = require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USR,
  password: process.env.PSSWRD,
  database: process.env.DB,
});

function executeQuery(pool, query) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Error getting connection:", err);
        return reject(err);
      }

      connection.query(query, (error, results) => {
        connection.release();

        if (error) {
          console.error("Error executing query:", error);
          return reject(error);
        }

        resolve(results);
      });
    });
  });
}

// --------------------------------------------------------------------------

app.post("/search", async (req, res) => {
  console.log("req.body", req.body);
  const { searchTerm } = req.body;
  try {
    const results = await executeQuery(
      db,
      `SELECT Course.id, Question.description, Question.tag, sd, d, n, a, sa, tot, med, mu, sig
      FROM Course, Question, Evaluation
      WHERE Course.id LIKE "%${searchTerm}%" AND Course.id=Evaluation.cid AND Question.id=Evaluation.qid
      ORDER BY Course.id ASC;`
    );
    res.send(results);
  } catch (error) {
    console.error("Error in POST /search", error);
    res.status(500).send("Internal Server Error");
  }
});

// --------------------------------------------------------------------------

app.listen(8080, () => {
  console.log("server listening on port 8080");
});
