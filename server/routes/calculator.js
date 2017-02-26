var express = require("express");
var router = express.Router();
var calulatorOutput; //holds the result of the calulation

//different POST routes to handles the inbound object and perform the relavant calculation


router.post('/division',function(req,res){
    var response = req.body; //stores the inbound object as a variable
    console.log('the POST request consisted of: ',response,' let me do some work on that');
    calculatedOutput = parseInt(response.x) / parseInt(response.y);
    console.log(calculatedOutput);
    res.send(calculatedOutput+'');

}) // end /division

router.post('/addition',function(req,res){
  var response = req.body;
  console.log('the POST request consisted of: ',response,' let me do some work on that');
  calculatedOutput = parseFloat(response.x) + parseFloat(response.y);
  console.log(calculatedOutput);
  res.send(calculatedOutput+'');

}); // end /addition

router.post('/subtraction',function(req,res){
  var response = req.body;
  console.log('the POST request consisted of: ',response,' let me do some work on that');
  calculatedOutput = parseInt(response.x) - parseInt(response.y);
  console.log(calculatedOutput);
  res.send(calculatedOutput+'');
  console.log('subtraction happened');
}); // end /subtraction

router.post('/multiplication',function(req,res){
  console.log('req.body = ',req.body);
  var response = req.body;
  console.log('the POST request consisted of: ',response,' let me do some work on that');
  calculatedOutput = parseInt(response.x) * parseInt(response.y);
  console.log(calculatedOutput);
  res.send(calculatedOutput+'');
  console.log('multiplication happened');
}); // end /multiplication





module.exports= router;
