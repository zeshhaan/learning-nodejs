const express = require("express");

const app = express();
const server = app.listen(80, () =>
  console.log("server listening on port " + 80)
);

app.get("/", (req, res, next) => {
  res.status(200).send("Yaahoo!");
});
