var express = ('express')
var router = express.Router();

router.post('/division',function(req,res){
  res.sendStatus(200);
  console.log('divison happened');
})

router.post('/addition',function(req,res){
  res.sendStatus(200)
  console.log('addition happened');
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
