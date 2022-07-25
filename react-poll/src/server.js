const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pollData = require("./data.json");
app.get("/poll", function (req, res) {
  res.send(pollData);
});

app.listen(5000, () => console.log("Server Running..."));