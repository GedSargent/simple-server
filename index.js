const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  res.sendFile("contact.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
