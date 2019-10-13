var timeLeft = 80;
var elem = document.getElementById('some_div');
var timerId = setInterval(countdown, 500);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
    } else {
        elem.innerHTML = 'Timer: ' + timeLeft + ' seconds remaining';
        timeLeft--;
    }
}

function doSomething() {
    alert("Times up!");
}


function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
	var correct = 0;


	if (question1 == "Top Right Bottom Left") {
		correct++;
}
	if (question2 == "absoluetly true") {
		correct++;
}	
	if (question3 == "identifies an element") {
		correct++;
    }

    if (question4 == "event.stopPropagation();") {
        correct++;
    }

    if (question5 == "converts to a string") {
		correct++;
    }
    
	
	var messages = ["Great job!", "That's just okay"];
	var score;

	if (correct == 0) {
		score = 4;
	}

	if (correct > 0 && correct < 5) {
		score = 1;
	}

	if (correct == 5) {
		score = 0;
    }
    
  

	document.getElementById("submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	
	}