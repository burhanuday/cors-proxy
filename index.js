const express = require("express");
const bodyParser = require("body-parser");
const cloudscraper = require("cloudscraper");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  const url = req.query.url;
  cloudscraper.get(url).then(
    response => {
      res.send(response);
    },
    error => {
      res.send(error);
    }
  );
});

app.listen(5000);