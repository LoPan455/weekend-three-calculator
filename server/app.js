console.log('starting up the server');

var express = require('express'); //brings in the Express module
var app = express(); //this is a function that RETURNS an OBJECT
var bodyParser = require('body-parser');
var calculator = require('./routes/calculator.js');
app.use(express.static('server/public')); // this methods says, 'is this request for a static file?  If so, I will look in '/server/public'
app.use(bodyParser.urlencoded({extended: true})); //if we want to parse the body of a response!


app.use('/calculator',calculator)


console.log('listening on server port 3000');
app.listen(3000);
