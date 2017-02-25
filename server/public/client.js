console.log('JS has been sourced properly');
var value1 = 0;
var value2 = 0;
var numbersAndOperator = {};
var type = '';
var enteredValue = '';
var routeUrl = '';

$(document).ready(function(){
  console.log('jQuery has been sourced properly');

  // number button listener
  $('.digitButton').on('click',function(){
    var addDigit = $(this).text();
    enteredValue += addDigit;
    $('#enteredValue').text(''); // clears the entered value field to make room for the next number
    $('#enteredValue').text(enteredValue);
  })//end digit button click listener

  //operation button listeners
  $('#additionButton').on('click',function(){
    //sets the value variables as the value of the input fields
    value1 = $('#enteredValue').text(); //sets value1 to whatever is in the 'You entered' span
    type = $(this).data('operand'); //sets the operation type
    numbersAndOperator.x = value1  //writes value1 as 'x' in the object that will be sent to the server
    numbersAndOperator.type = type;
    routeUrl = "calculator/addition" //sets the destination route for the object
    enteredValue = ''; //clears out the enteredValue variable
  }); //end addition button click listener

  $('#subtractionButton').on('click',function(){
    //sets the value variables as the value of the input fields
    value1 = $('#enteredValue').text(); //sets value1 to whatever is in the 'You entered' span
    type = $(this).data('operand'); //sets the operation type
    numbersAndOperator.x = value1  //writes value1 as 'x' in the object that will be sent to the server
    numbersAndOperator.type = type;
    routeUrl = "calculator/subtraction" //sets the destination route for the object
    enteredValue = ''; //clears
  });//end subtraction button click listener

  $('#multiplicationButton').on('click',function(){
    //sets the value variables as the value of the input fields
    value1 = $('#enteredValue').text(); //sets value1 to whatever is in the 'You entered' span
    type = $(this).data('operand'); //sets the operation type
    numbersAndOperator.x = value1  //writes value1 as 'x' in the object that will be sent to the server
    numbersAndOperator.type = type;
    routeUrl = "calculator/multiplication" //sets the destination route for the object
    enteredValue = ''; //clears
  });// end multiplication button click listener

  $('#divisionButton').on('click',function(){
    //sets the value variables as the value of the input fields
    value1 = $('#enteredValue').text(); //sets value1 to whatever is in the 'You entered' span
    type = $(this).data('operand'); //sets the operation type
    numbersAndOperator.x = value1  //writes value1 as 'x' in the object that will be sent to the server
    numbersAndOperator.type = type;
    routeUrl = "calculator/division" //sets the destination route for the object
    enteredValue = ''; //clears
  }); // end division button listener

  $('#equalsButton').on('click',function(){
    value2 = $('#enteredValue').text() //grabs the second "you entered" number and writes to the value2 variable
    numbersAndOperator.y = value2; //writes value2 as the 'y' value in the object that will be sent to the server
    enteredValue = '';
    $('#enteredValue').text('');
    // ajax POST request to send the object to the server for processing
    $.ajax({
      type: "POST",
      url: routeUrl,  //the route is set depending which operand the user chose previously
      data: numbersAndOperator, // defining the object as the data payload
      success: function(response){
        console.log('logging the server response: ',response);
        $('#result').text(response);
      },//end success function
      error: function(error){
        console.log('The "/addition" ajax post request failed with error: ', error);
      } //end error function
    })//end ajax
  }); // end equals button listener

  // listener for reset button
  $('#clearButton').on('click',function(){
    value1 = 0;
    value2 = 0;
    $('#value1').val('');
    $('#value2').val('');
    $('#result').text('');
});



}); //end document.ready
