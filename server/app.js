console.log('starting up the server');

var express = require('express'); //brings in the Express module
var app = express(); //this is a function that RETURNS an OBJECT
var bodyParser = require('body-parser');
var path = require('path');
var calculator = require('./routes/calculator.js');
//var bootstrap = require('bootstrap');

app.get("/*", function(req,res){
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "/public/", file));
});

// app.use(express.static('public/')); // this methods says, 'is this request for a static file?  If so, I will look in '/server/public'


app.use(bodyParser.urlencoded({extended: true})); //if we want to parse the body of a response!


app.use('/calculator',calculator); //directs traffic into the calculator.js route


console.log('listening on server port 3000');
app.listen(3000);
