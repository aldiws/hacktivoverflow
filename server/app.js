const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hacktiv_overflow', (err) => {
  if (!err) {
    console.log('database connection')
  }
  else{
    console.log('database not connection')
  }  
});


app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const questions = require("./router/questions")
const answers = require("./router/answers")
const users = require("./router/users")
const fbUsers = require("./router/fbUsers")

app.use('/fbUsers', fbUsers)
app.use('/users', users)
app.use('/answers', answers)
app.use('/questions', questions)

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

var port = normalizePort(process.env.PORT || 3003);

app.listen(port)
