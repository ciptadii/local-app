var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 3000
const mongoose = require('mongoose')
app.use(bodyParser.json())
app.use(cors())

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

const mongoURI = 'mongodb+srv://app-admin:app-admin@cluster0-hcadv.mongodb.net/test?retryWrites=true&w=majority'

mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))


var Users = require('./routes/Users')

app.use('/users', Users)

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})