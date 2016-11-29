var PORT = 3000;
var express = require('express');

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/public'));

app.listen(PORT, function(){
	console.log("Chat server listening on " + PORT);
})