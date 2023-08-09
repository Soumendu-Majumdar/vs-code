// Create web server
const express = require("express");
const app = express();
const port = 3000;
// Importing the comments.json file
const comments = require("./comments.json");
// Importing the body-parser module
const bodyParser = require("body-parser");
// Using the body-parser module
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Path: /comments
app.get("/comments", (req, res) => {
  res.json(comments);
});
// Path: /comments/:id
app.get("/comments/:id", (req, res) => {
  const comment = comments.find((comment) => comment.id === +req.params.id);
  res.json(comment);
});
// Path: /comments
app.post("/comments", (req, res) => {
  const comment = {
    id: comments.length + 1,
    body: req.body.body,
    postId: 1,
  };
  comments.push(comment);
  res.json(comment);
});
// Path: /comments/:id
app.put("/comments/:id", (req, res) => {
  const comment = comments.find((comment) => comment.id === +req.params.id);
  comment.body = req.body.body;
  res.json(comment);
});
// Path: /comments/:id
app.delete("/comments/:id", (req, res) => {
  const comment = comments.find((comment) => comment.id === +req.params.id);
  const index = comments.indexOf(comment);
  comments.splice(index, 1);
  res.json(comment);
});
// Listening on port 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});