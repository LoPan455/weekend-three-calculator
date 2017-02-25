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
    // ajax POST request to send the object to the server for processing
    $.ajax({
      type: "POST",
      url: "calculator/addition",
      data: numbersAndOperator, // defining the object as the data payload
      success: function(response){
        console.log('logging the server response: ',response);
        $('#result').text(response);
      },//end success function
      error: function(error){
        console.log('The "/addition" ajax post request failed with error: ', error);
    } //end error function
  })//end ajax
  }); // end listener

  $('#subtractionButton').on('click',function(){
    console.log('subtraction button clicked');

        //sets the value variables as the value of the input fields
        value1 = $('#value1').val();
        value2 = $('#value2').val();
        type = $(this).data('operand');
        //adds these values to the empty object
        numbersAndOperator.x = value1
        numbersAndOperator.y = value2;
        numbersAndOperator.type = type;
        console.log(numbersAndOperator);
        // ajax POST request to send the object to the server for processing
        $.ajax({
          type: "POST",
          url: "calculator/subtraction",
          data: numbersAndOperator, // defining the object as the data payload
          success: function(response){
            console.log('logging the server response: ',response);
            $('#result').text(response);
          },
          error: function(error){
            console.log('The "/addition" ajax post request failed with error: ', error);
        }
      })//end ajax
  }); //end listener

  $('#multiplicationButton').on('click',function(){
    console.log('multiplication button clicked');

        //sets the value variables as the value of the input fields
        value1 = $('#value1').val();
        value2 = $('#value2').val();
        type = $(this).data('operand');
        //adds these values to the empty object
        numbersAndOperator.x = value1
        numbersAndOperator.y = value2;
        numbersAndOperator.type = type;
        console.log(numbersAndOperator);
        // ajax POST request to send the object to the server for processing
        $.ajax({
          type: "POST",
          url: "calculator/multiplication",
          data: numbersAndOperator, // defining the object as the data payload
          success: function(response){
            console.log('logging the server response: ',response);
            $('#result').text(response);
          },
          error: function(error){
            console.log('The "/addition" ajax post request failed with error: ', error);
        }
      })//end ajax
  }); //end listener

  $('#divisionButton').on('click',function(){
    console.log('division button clicked');

        //sets the value variables as the value of the input fields
        value1 = $('#value1').val();
        value2 = $('#value2').val();
        type = $(this).data('operand');
        //adds these values to the empty object
        numbersAndOperator.x = value1
        numbersAndOperator.y = value2;
        numbersAndOperator.type = type;
        console.log(numbersAndOperator);
        // ajax POST request to send the object to the server for processing
        $.ajax({
          type: "POST",
          url: "calculator/division",
          data: numbersAndOperator, // defining the object as the data payload
          success: function(response){
            console.log('logging the server response: ',response);
            $('#result').text(response);
          },
          error: function(error){
            console.log('The "/addition" ajax post request failed with error: ', error);
        }
      })//end ajax
  }); //end listener

  // listener for reset button
  $('#clearButton').on('click',function(){
    value1 = 0;
    value2 = 0;
    $('#value1').val('');
    $('#value2').val('');
    $('#result').text('');
});



}); //end document.ready
