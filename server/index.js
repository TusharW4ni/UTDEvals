const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Mysqlpass@123",
  database: "UTDEvals",
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

app.get("/", async (req, res) => {
  try {
    const results = await executeQuery(db, "SELECT * FROM TESTTABLE");
    res.send(results);
  } catch (error) {
    console.error("Error in GET /:", error);
    res.status(500).send("Internal Server Error");
  }
});

// --------------------------------------------------------------------------

app.listen(8080, () => {
  console.log("server listening on port 8080");
});
