const express = require("express");
const app = express();
app.use(express.json());

const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "wt",
});

app.listen(5001, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Connected to MySQL Database");
});

app.get("/data", (req, res) => {
  con.query("SELECT * FROM tut", function (err, result) {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }
    console.log("Result: " + JSON.stringify(result));
    res.json(result);
  });
});

app.post("/data", (req, res) => {
  const { regid, name, age, id, mobile } = req.body;
  const sqlQuery = `INSERT INTO tut (regid, name, age, id, mobile) VALUES (?, ?, ?, ?, ?)`;

  con.query(sqlQuery, [regid, name, age, id, mobile], function (err, result) {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }
    console.log("Result: " + JSON.stringify(result));
    res.json(result);
  });
});

app.put("/data", (req, res) => {
  const { regid, name, age, id, mobile } = req.body;
  const sqlQuery = `UPDATE tut SET name=?, age=?, id=?, mobile=? WHERE regid=?`;

  con.query(sqlQuery, [name, age, id, mobile, regid], function (err, result) {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }
    console.log("Result: " + JSON.stringify(result));
    res.json(result);
  });
});

app.delete("/data/:id", (req, res) => {
  const { id } = req.params;
  const sqlQuery = `DELETE FROM tut WHERE id=?`;

  con.query(sqlQuery, [id], function (err, result) {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }
    console.log("Result: " + JSON.stringify(result));
    res.json(result);
  });
});
