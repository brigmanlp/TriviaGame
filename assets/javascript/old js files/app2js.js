
$(document).ready(function() {});

var intervalID;
var timer = duration, minutes, seconds;
var duration = 60 * 15;
var minutes = parseInt(duration / 60, 10);
var seconds = parseInt(duration % 60, 10);


function start (){
	intervalID = setInterval(countDown, 1000);
}

function countDown(){
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        //display.html(minutes + ":" + seconds);
        $("#timer").html(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }

        if (timer === 0) {
        pause();
        alert("Time Up!");
}

function pause(){
	clearInterval(intervalID);
}

$("#startButton").on("click", function () {
        countDown(duration, timer);
        console.log(timer);
    });