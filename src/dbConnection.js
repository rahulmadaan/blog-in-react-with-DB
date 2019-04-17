const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "intruder",
  database: "blogger"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Database is connected");
});

module.exports = { connection };
