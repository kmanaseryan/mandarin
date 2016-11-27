var express = require('express');

var app = express();
var bodyParser = require('body-parser');

//request module which is designed for making http request from server to server
var request = require('request');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//this is drivers array which will be requested from the client (browser)
var drivers = [
  {
    name: "John",
    car: "Zik"
  },
  {
    name: "Trump",
    car: "Vilis"
  },
  {
    name: "Obama",
    car: "Chayka"
    }
]

//serves index.html file to the client (browser)
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

//sends drivers array to the client (browser)
app.get('/drivers', function (req, res) {
    res.send({ drivers: drivers });
})

//makes get request to http://localhost:3001/cars url and then sends the retrived data to the client (browser)
app.get('/cars', function (req, res) {
  
  //makes GET request
  request.get({
      url: "http://localhost:3002/cars", //url of the second server (server2.js). Note that the port is 3002 not 3000
      json: true
  }, function (err, response) {
    
      //got the data (located inside response.body) from the second server and sends it to the client (browser)
      res.send(response.body);
  });
})

//starting to create server on 3000 port
app.listen(3000, function () {
    console.log('App listening on port 3000!')
})

