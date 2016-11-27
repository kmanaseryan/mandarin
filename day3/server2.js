var express = require('express');

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//cars array. This array will be send to the first server (server1.js)
var cars = [
    {
      model: "Zil",
      price: 1000
    },
    {
      model: "Vilis",
      price: 2500
    },
    {
      model: "Chayka",
      price: 1500
    }
]

//sends the cars array
app.get('/cars', function (req, res) {
  res.send({ cars: cars });
})

//starting to create server on 3002 port
app.listen(3002, function () {
  console.log('Cars server listening on port 3001!')
})

