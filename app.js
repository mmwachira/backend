const express = require('express')
const birds = require('./birds')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use('/birds', birds)

app.listen(3000)