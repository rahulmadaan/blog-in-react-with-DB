const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const { connection } = require("../client/src/dbConnection.js");

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
const insertPost = function(userId, title, body, footer) {
  const qry = `insert into post (userId, postHeader, postBody, postFooter) values(${userId},' ${title} ',' ${body} ','${footer} ')`;
  connection.query(qry, (err, result) => {
    if (err) throw err;
  });
};

const getHeaders = function(req, res) {
  const userId = getUserId(req.url);
  getHeadersBy(userId, res);
};

const addPost = function(req, res) {
  const userId = getUserId(req.url);
  const { title, body, footer } = JSON.parse(req.body);
  insertPost(userId, title, body, footer);
  res.send("ok");
};
const renderIndexFile = function(req, res) {
  res.send(fs.readFileSync("./client/build/index.html", "utf8"));
};

const logger = (req, res, next) => {
  console.log(req.url);
  next();
};

app.use(logger);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());

app.get(/\/getPosts/, getPosts);
app.get(/\/getPostHeaders/, getHeaders);
app.post(/\/addPost/, addPost);
app.use(express.static("./client/build/", { extensions: ["html"] }));

app.use(renderIndexFile);
module.exports = { app };
