// Setup server
const express = require("express");
const app = express();

//Setup env variables
require('dotenv').config();

//Setup Database Connection
const dbConnection = require('./utils/db-connection');
  
dbConnection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//Request Data Type
app.use(express.urlencoded());

//Initialize Routers
const indexRouter = require('./routes/index');
const todoRouter = require('./routes/to-do');
const userRouter = require('./routes/user');
const todolistRouter = require('./routes/to-do-list');

//Initialize Request Data Type
app.use(express.json());
//app.use(express.urlencoded({ extended: false }));

//Use Routers
app.use('/', indexRouter);
app.use('/api/to-do', todoRouter);
app.use('/api/user', userRouter);
app.use('/api/to-do-list', todolistRouter);

// Setup where the server listens e.g. which port. Necessary for the browser for example.
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));