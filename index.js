const express = require("express");
const bodyParser = require("body-parser");
const cloudscraper = require("cloudscraper");
const cors = require("cors");

const app = express();
let port = process.env.PORT || 5000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

app.post("/", (req, res, next) => {
  let url = req.body.urlToGet;

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
