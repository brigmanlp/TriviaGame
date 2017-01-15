
$(document).ready(function() {
	//  Timer Set Up
    //  Set our number counter to 60sec * 15 min = 900 seconds.
    // function sectostr(time) {
    // return ~~(time / 60) + ":" + (time % 60 < 10 ? "0" : "") + time % 60;}
    
	function timeConverter (t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
    var number = 900;
    console.log(number);

    var converted = timeConverter(number);
    console.log(converted);
    $("#timer").html(converted);

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
    function run() {intervalId = setInterval(converted, 1000); console.log(questions);}

    //  The decrement function.
    function decrement() { 
    	converted--;
      //  Show the number in the #timer tag.
      $("#timer").html("<h2>" + converted + "</h2>");
      if (converted === 0) {
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
 //    function questionsGenerate(questions) {
 //    console.log(questions);
	// }
      
});