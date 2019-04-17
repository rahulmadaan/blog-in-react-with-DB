const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { connection } = require("../src/dbConnection.js");

const getPostsBy = function(userId, res) {
  const qry = `select * from post where userId = ${userId}`;
  connection.query(qry, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

const getHeadersBy = function(userId, res) {
  const qry = `select postHeader from post where userId = ${userId}`;
  connection.query(qry, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

const getUserId = function(url) {
  return url.split("=")[1];
};

const getPosts = function(req, res) {
  const userId = getUserId(req.url);
  getPostsBy(userId, res);
};

const getHeaders = function(req, res) {
  const userId = getUserId(req.url);
  getHeadersBy(userId, res);
};


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());

app.get(/\/getPosts/, getPosts);
app.get(/\/getPostHeaders/, getHeaders);
app.use(express.static("build", { extensions: ["html"] }));

module.exports = { app };