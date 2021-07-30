// Setup server
const express = require("express");
const app = express();

//Setup env variables
require('dotenv').config();

//Setup Database Connection
const mysql = require("mysql");

var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database : process.env.DB_NAME
});
  
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//Request Data Type
app.use(express.urlencoded());

// First route. Go to http://localhost:5000 and you should see Hello World in the
// browser. Remember the project has no UI, so this is just for you to experience
// that this all works.

//Initial Landing
app.get('/', (req, res) => res.redirect("/home"));
app.get('/home', (req, res) => res.send("Hiho!!"));

//New Entry
app.post("/add", function (req, res) {

    res.send(`You added ${req.body.entry}!`);

});

//Delete Entry
app.delete("/remove", function(req, res) {

    res.send("Delete Successful!");

});



// Setup where the server listens e.g. which port. Necessary for the browser for example.
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));