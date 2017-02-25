var express = require("express");
var router = express.Router();
var calulatorOutput; //holds the result of the calulation

router.post('/division',function(req,res){
  res.sendStatus(200);
  console.log('divison happened');
})

router.post('/addition',function(req,res){
  
  var response = req.body;
  console.log('the POST request consisted of: ',response,' let me do some work on that');
  calculatedOutput = parseInt(response.x) + parseInt(response.y);
  console.log(calculatedOutput);
  res.send(calculatedOutput+'');

});

router.post('/subtraction',function(req,res){
  res.sendStatus(200);
  console.log('subtraction happened');
});

router.post('/multiplication',function(res,req){
  res.sendStatus(200);
  console.log('multiplication happened');
})





module.exports= router;
