/* 
    IMPORTANT NOTE:
    Some of the following code is used by many apps as it is the standard and recommended way in setting up a NodeJS w/ ExpressJS server
*/

const express = require("express");
const connection = require("./config/db");

const app = express();

// Connect to MySQL database;
connection.connect();

// Code slice (Test by querying database)
const sqlQuery = "SELECT * FROM test";

connection.query(sqlQuery, (err, rows, fields) => {
  if (err) {
    console.log(`Error connecting to MySQL database: ${err}`);
  } else {
    console.log(rows);
  }
});

connection.end();

app.get("/", (req, res) => res.send("API Running"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
