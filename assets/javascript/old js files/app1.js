
$(document).ready(function() {
//questions variable with an array of objects has been
//created in a separate questions.js file
//Start with defining global variables
	var numberCorrect = 0;
    var numberIncorrect = 0;
    var unanswered = 0;
    var thisQuestion;
    var answered;
    var storeAnswer;
    var answerDisplay;
    var currentQuestion = 0;

function startTimer(duration, display) {
    var timer = fifteenMinutes, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        //display.html(minutes + ":" + seconds);
        $("#timer").html(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = fifteenMinutes;
        }

        if (timer === 0) {
        pause();
        alert("Time Up!");
      }
    }, 1000);
}

// jQuery(function ($) {
	//setting initial timer number
    var fifteenMinutes = 60 * 2,
    
    display = $("#timer");

    //  The pause function
    function pause() {
    //  Clears our timer, We just pass the name of the interval to the clearInterval function.
      clearInterval(timer);
    }
    // When the start button gets clicked, run the startTimer function
	$("#startButton").on("click", function(){
		startTimer(fifteenMinutes, display);
		call(questions);
		console.log(questions);
	});
    //  When the pause button gets clicked, run the pause function.
    $("#pause").on("click", function (){
    	pause();
    });

//     //  When the resume button gets clicked, execute the run function.
//     $("#resume").on("click", startTimer);





});