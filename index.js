const express = require("express");
const app = express();
const port = 5000;

// Open the server and listen on port 5000
app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});

// ------------ ROUTING ------------

// Respond with "index.html" file for requests that hit our root "/"
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

// Respond with "about.html" file for requests that hit our root "/about"
app.get("/about", (req, res) => {
  res.sendFile("about.html", { root: __dirname });
});

/*
  Using the functions above as your guide, can you write the code to 
  respond with our "contact.html" file for requests that hit the "/contact"?
*/
