console.log('JS has been sourced properly');
var value1 = 0; //stores the first value the user enters
var value2 = 0; //stores the second value the user enters
var numbersAndOperator = {}; //intializes the object that will be sent to the server
var type = ''; // stores the operator chosen by the user
var enteredValue = ''; //stores the digit that's clikced by the user
var routeUrl = ''; //stores the appropriate route to which the data payload will be sent

$(document).ready(function(){
  console.log('jQuery has been sourced properly');

  // listener for digt buttons 0-9
  $('.digitButton').on('click',function(){
    var addDigit = $(this).text(); //picks up the text of each button
    enteredValue += addDigit; //adds the digit entered into the string that will eventually end up as value1 or valu2
    $('#enteredValue').text(''); // clears the entered value field to make room for the next number
    $('#enteredValue').text(enteredValue); //writes the enteredValue string as text into the display
  });

  //operation button listeners
  $('#additionButton').on('click',function(){
    storeFirstDigit(); //upon click of an operator button, the string of digits the user clikced is stored as 'value1'
    routeUrl = "/calculator/addition" //sets the destination route for the object
  });

  $('#subtractionButton').on('click',function(){
    storeFirstDigit(); //upon click of an operator button, the string of digits the user clikced is stored as 'value1'
    routeUrl = "/calculator/subtraction" //sets the destination route for the object
  });

  $('#multiplicationButton').on('click',function(){
    storeFirstDigit(); //upon click of an operator button, the string of digits the user clikced is stored as 'value1'
    routeUrl = "/calculator/multiplication" //sets the destination route for the object
  });

  $('#divisionButton').on('click',function(){
    storeFirstDigit();//upon click of an operator button, the string of digits the user clikced is stored as 'value1'
    routeUrl = "/calculator/division" //sets the destination route for the object
  });

  // event handler for clicking '='
  $('#equalsButton').on('click',function(){
    value2 = $('#enteredValue').text() //grabs the second "you entered" number and writes to the value2 variable
    numbersAndOperator.y = value2; //writes value2 as the 'y' value in the object that will be sent to the server
    enteredValue = ''; //clears out enteredValue to make room for a new caclualtion
    $('#enteredValue').text(''); //clears out the display

    // ajax POST request to send the object to the server for processing
    $.ajax({
      type: "POST",
      url: routeUrl,  //the route is set depending which operator the user chose previously
      data: numbersAndOperator, // defining the object as the data payload
      success: function(response){
        console.log('logging the server response: ',response);
        $('#result').text(response); //writes the response text to the DOM.
      },//end success function
      error: function(error){
        console.log('The "/addition" ajax post request failed with error: ', error);
      } //end error function
    })//end ajax
  }); // end equals button listener

  // listener for reset button
  $('#clearButton').on('click',function(){
    value1 = 0; //clears out value1;
    value2 = 0; //clears out value2;
    enteredValue='' //clears out the storage for the entered value1
    $('#enteredValue').text(''); //clears the display
    $('#result').text('');//clears the display
});



}); //end document.ready


function storeFirstDigit(){
  value1 = $('#enteredValue').text(); //sets value1 to whatever is in the 'You entered' span
  type = $(this).data('operator'); //sets the operation type
  numbersAndOperator.x = value1  //writes value1 as 'x' in the object that will be sent to the server
  numbersAndOperator.type = type; //writes the operator as the 'type' key in the data payload that's destined for the server.
  enteredValue = ''; //clears out the enteredValue variable to make room for value2
}
