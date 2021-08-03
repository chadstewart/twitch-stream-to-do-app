// Setup server
const express = require("express");
const app = express();
//const bodyParser = require('body-parser');

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

//Initialize Routers
const indexRouter = require('./routes/index');
const todoRouter = require('./routes/todo');
const userRouter = require('./routes/user');
const todolistRouter = require('./routes/todolist');

//Initialize Request Data Type
app.use(express.json());
//app.use(bodyParser.json());
//app.use(express.urlencoded({ extended: false }));

//Use Routers
app.use('/', indexRouter);
app.use('/api/todo', todoRouter);
app.use('/api/user', userRouter);
app.use('/api/todolist', todolistRouter);

// Setup where the server listens e.g. which port. Necessary for the browser for example.
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));