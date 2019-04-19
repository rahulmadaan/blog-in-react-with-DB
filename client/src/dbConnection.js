const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.HOSTNAME,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Database is connected");
});

module.exports = { connection };
