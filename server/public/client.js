console.log('JS has been sourced properly');
var value1 = 0;
var value2 = 0;
var numbersAndOperator = {};
var type = '';

$(document).ready(function(){
  console.log('jQuery has been sourced properly');

  //submit button listeners
  $('#additionButton').on('click',function(){

    //sets the value variables as the value of the input fields
    value1 = $('#value1').val();
    value2 = $('#value2').val();
    type = $(this).data('operand');
    //adds these values to the empty object
    numbersAndOperator.x = value1
    numbersAndOperator.y = value2;
    numbersAndOperator.type = type;
    console.log(numbersAndOperator);


    $.ajax({
      type: "POST",
      url: "calculator/addition",
      data: numbersAndOperator,
      success: function(response){
        console.log('logging the server response: ',response);
        $('#result').text(response);
      },
      error: function(error){
        console.log('The "/addition" ajax post request failed with error: ', error);
    }
  })//end ajax



  }); // end listener

  $('#subtractionButton').on('click',function(){
    console.log('subtraction button clicked');

  }); //end listener

  $('#multiplicationButton').on('click',function(){
    console.log('multiplication button clicked');
  }); //end listener

  $('#divisionButton').on('click',function(){
    console.log('division button clicked');
  }); //end listener










}); //end of document.ready
