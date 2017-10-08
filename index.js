$(function(){

  var myArray;
  var inputLength;
  var reading = false;
  var counter;
  var action;
  var frequency = 200;






  $("#new").hide();
  $("#resume").hide();
  $("#pause").hide();
  $("#controls").hide();
  $("#result").hide();
  $("#error").hide();

//click to start reading
$("#start").click(function(){
  // get text and split it to words inside in array
  myArray = $("#userInput").val().split(/\s+/);

//Get the number of words
  inputLength = myArray.length;

  if(inputLength > 1){
    // move to READING MODE
    reading = true;
    // HIDE START/ERROR/, SHOW NEw/PAUSE/controls
    $("#start").hide();
    $("#error").hide();
    $("#userInput").hide();
    $("#new").show();
    $("#pause").show();
    $("#controls").show();

    //SET THE PROGRESS SLIDEr input
    $("#progressslider").attr("max", inputLength-1);

    //START THE COUNTER AT ZERO
    counter = 0;

    //  sHOW READING BOX
    $("#result").show();
    $("#result").text(myArray[counter]);

    // START READING FROM THE FIRST words
    action = setInterval(read, frequency);

  } else {
    $("#error").show();
  }
});
// SLICK ON NEW
  $("#new").click(function(){
    // reload the page
    location.reload();

  });

// cLICK ON TJE STOP
  $("#pause").click(function(){
    clearInterval(action);
    reading = false;

    //hide pause and show resume
    $("#pause").hide();
    $("#resume").show();

  });

// CLICK ON THE RESUME
$("#resume").click(function(){
  //start reading
  action = setInterval(read, frequency);

  //go back to reading MODE
  reading = true;

  //hide resume and show pause
  $("#resume").hide();
  $("#pause").show();

});

//CHANGE FONT-SIZE
$("#fontsizeslider").on("slidestop", function(event, ui) {
  //refresh the SLIDER
  $("#fontsizeslider").slider("refresh");

  // get the value of SLIDER
  var slidervalue = parseInt($("#fontsizeslider").val());


  $("#result").css("fontSize", slidervalue)
  $("#fontsize").rext(slidervalue);
});






//FUNCTIONS

function read(){
  if(counter == inputLength-1) {//last words
    clearInterval(action);
    reading = false;
    $("#pause").hide();

  } else {
    // COUNTER GOES UO BY ONE
    counter++;

    //GET words
    $("#result").text(myArray[counter]);

    // CHANGE THE PROGRESS SLIDER VALUE
    $("#progressslider").val(counter).slider('refresh');

    //CHANGE TEXT OF % PROGRESS
    $("#percentage").text(Math.floor(counter/(inputLength-1) * 100));


  }
}















});
