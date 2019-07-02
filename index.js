const express = require("express");
const bodyParser = require("body-parser");
const cloudscraper = require("cloudscraper");

const app = express();
let port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  const url = req.query.url;
  res.header("Access-Control-Allow-Origin", "*");
  cloudscraper.get(url).then(
    response => {
      res.send(response);
    },
    error => {
      res.send(error);
    }
  );
});

app.listen(port);
