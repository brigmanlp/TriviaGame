// * You'll create a trivia game that shows only one question until
//  the player answers it or their time runs out.


$(document).ready(function() {

    // var questions = [{
    //     question: "How do you declare a JavaScript variable?",
    //     choices: ["var carName", "variable carName", "v carName", "carName"],
    //     answer: 0,
    //     img: "assets/images/question1.jpg"
    // }, {
    //     question: "Which event occurs when the user clicks on an HTML element?",
    //     choices: ["onchange", "onmouseclick", "onmouseover", "onclick"],
    //     answer: 3,
    //     img: "assets/images/question2.jpg"
    // }, {
    //     question: "Lots of websites have links that change color when you move your cursor over them. What selector represents an A tag that has the cursor over it?",
    //     choices: ["@selected", "a:mouseover", "a:selected", "a:hover"],
    //     answer: 3,
    //     img: "assets/images/question3.jpg"
    // }, {
    //     question: "The CSS 'box model' describes a rectangular area around an element, used when laying out elements on the page. Which three properties affect the box model?",
    //     choices: ["distance, margin, border", "margin, padding, border", "margin, padding-outer, padding-inner", "position, margin, padding", ],
    //     answer: 1,
    //     img: "assets/images/question4.jpg"
    // }];

    var numberCorrect = 0;
    var numberIncorrect = 0;
    var unanswered = 0;
    var thisQuestion;
    var answered;
    var storeAnswer;
    var birdPhoto;
    var answerDisplay;
    var currentQuestion = 0;

    //  Set our number counter to 40 seconds.
    var countdown = 40;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    function waitForIt() {
        var windowTimeout = setTimeout(function() {
            displayResults();
        }, 1000);
    }

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function runtimer() {
        intervalId = setInterval(decrement, 1000);
    };

    //  The decrement function that decreases number by 1.
    function decrement() {
        countdown--;
        //  Show the number in the #show-number tag.
        $("#countdown").text("Time Remaining: " + countdown);
        //  Once number hits zero, run stop function.
        if (countdown === 0) {
            stopTimer();
            clearDisplay();

            $("#response").text("Time is up! The correct answer was " + answerDisplay + ".");
            unanswered++;
            console.log("Unanswered questions: " + numberIncorrect)
            $("#computerimg").empty();
            $("#computerimg").prepend("<img src=" + '"' + birdPhoto + '"' + " >");

            currentQuestion++;
            if (currentQuestion >= questions.length) {
                waitForIt();
            } else {
                resetTimer();
                displayDiv();
            }
        }
    };


    //  The stop function
    function stopTimer() {
        clearInterval(intervalId);
    };

    function resetTimer() {
        countdown = 40;
    };


    function displayResults() {
        $("#hiddenDiv").css("display", "none");
        $("#results-panel").css("display", "block");
        $("#correct-answers").text(numberCorrect);
        $("#incorrect-answers").text(numberIncorrect);
        $("#unanswered").text(unanswered);
        $("#restart").css("display", "block");
    };

    $("#restart").click(function(event) {
        $("#restart").css("display", "none");
        $("#results-panel").css("display", "none");
        currentQuestion = 0;
        numberCorrect = 0;
        numberIncorrect = 0;
        unanswered = 0;
        $("#computerimg").empty();
        $("#response").empty();
        displayDiv();
        resetTimer();
    });

    function clearDisplay() {
        $("#the-question").empty();
        $("#option-0").empty();
        $("#option-1").empty();
        $("#option-2").empty();
        $("#option-3").empty();
        $("#response").empty();
        $("#hiddenDiv").css("display", "none");
    };

    function displayDiv() {
        $("#hiddenDiv").css("display", "block");
        postQuestions()
    };

    function postQuestions() {

        thisQuestion = questions[currentQuestion].question;
        storeAnswer = questions[currentQuestion].answer;
        console.log("The storeAnswer is " + storeAnswer);
        answered = "option-" + questions[currentQuestion].answer;
        console.log("Answer is: " + answered)
        birdPhoto = questions[currentQuestion].img;
        console.log("birdPhoto: " + birdPhoto);
        answerDisplay = questions[currentQuestion].choices[storeAnswer];
        console.log("answerDisplay: " + answerDisplay);

        $("#the-question").text(thisQuestion);

        $("#option-0").text(questions[currentQuestion].choices[0]);
        $("#option-1").text(questions[currentQuestion].choices[1]);
        $("#option-2").text(questions[currentQuestion].choices[2]);
        $("#option-3").text(questions[currentQuestion].choices[3]);
        runtimer();
    };


    $(".choice").click(function(event) {
        console.log(event.target.getAttribute("id"));

        var getId = event.target.getAttribute("id");
        if (getId == answered) {
            stopTimer();
            clearDisplay();

            $("#response").text("That's correct! The answer was " + answerDisplay + ".");
            numberCorrect++;
            console.log("numberCorrect: " + numberCorrect)
            $("#computerimg").empty();
            $("#computerimg").prepend("<img src=" + '"' + birdPhoto + '"' + " >");
            currentQuestion++;
            if (currentQuestion >= questions.length) {
                waitForIt();

            } else {
                resetTimer();
                displayDiv();
            };


        } else if (getId != answered) {
            stopTimer();
            clearDisplay();

            $("#response").text("Sorry! The correct answer was " + answerDisplay + ".");
            numberIncorrect++;
            console.log("numberIncorrect: " + numberIncorrect)
            $("#computerimg").empty();
            $("#computerimg").prepend("<img src=" + '"' + birdPhoto + '"' + " >");
            currentQuestion++;
            if (currentQuestion >= questions.length) {
                waitForIt();
            } else {
                resetTimer();
                displayDiv();
            };
        }
    });

    function hideStart() {
        $("#startGame").css("display", "none");
    };

    // After clicking Start button, display div with question
    $("#startGame").on("click", displayDiv);

    // After clicking Start button, hide Start button
    $("#startGame").on("click", hideStart);


});
