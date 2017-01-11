
$(document).ready(function() {
	//  Timer Set Up
    //  Set our number counter to 60sec * 15 min = 900 seconds.
    var number = 900;

    //  Variable that will hold our interval ID when we execute the "run" function
    var intervalId;
	
	//  When the start button gets clicked, execute the run function.
    $("#startButton").on("click", run);
    //  When the pause button gets clicked, run the pause function.
    $("#pause").on("click", pause);

    //  When the resume button gets clicked, execute the run function.
    $("#resume").on("click", run);

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function run() {intervalId = setInterval(decrement, 1000);}

    //  The decrement function.
    function decrement() { number--;
      //  Show the number in the #timer tag.
      $("#timer").html("<h2>" + number + "</h2>");
      if (number === 0) {
        pause();
        alert("Time Up!");
      }
    }
    //  The pause function
    function pause() {

      //  Clears our intervalId, We just pass the name of the interval to the clearInterval function.
      clearInterval(intervalId);
    }

    // Initial array of questions is in the questions.js file
    function questionsGenerate(questions) {
    console.log(questions);
	}
      
});