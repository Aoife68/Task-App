const express = require("express");
const bodyParser = require("body-parser");
//const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const path = require('path');

const port = 3000;

const app = express();

app.use(function(req, res, next) {  
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});  

//Import Model
//let TaskModel = require('./server/models/tasks');

//Load Routes
const index = require('./server/routes/index');
const tasks = require('./server/routes/task');

//Connect to Mongoose
mongoose.connect('mongodb://localhost/taskList');
let db = mongoose.connection;

//Check connection
db.once('open', ()=>{
  console.log('Connected to MongoDB');
});

//Check for DB errors
db.on('error', (err)=>{
  console.log('Error with db connection '+err);
});

//Handlebars middleware
// app.engine(
//   "handlebars",
//   exphbs({
//     defaultLayout: "main"
//   })
// );
// app.set("view engine", "handlebars");

app.set('views', path.join(__dirname, '/server/views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Set Static File
app.use(express.static(path.join(__dirname, 'client')));

//Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Routes
app.use('/', index);
app.use('/api', tasks);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});