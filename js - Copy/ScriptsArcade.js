var count = 0;
var score = 0;

window.onload = function onload() {
	$("#ButtonFour").prop('disabled', true);
	$("#reply-text").hide();
	shuffle(scenarios);
	text();
}

//Array Shuffle
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

//Text
function text() {
	$("#scenario-text").html(scenarios[count].scenario);
	$("#ButtonOne").html(scenarios[count].answer1);
	$("#ButtonTwo").html(scenarios[count].answer2);
	$("#ButtonThree").html(scenarios[count].answer3);
	$("#score-text").html("Score: " + score);
	if (scenarios[count].answer1 == null) {
		$("#ButtonOne").hide();
	}
	if (scenarios[count].answer2 == null) {
		$("#ButtonTwo").hide();
	}
	if (scenarios[count].answer3 == null) {
		$("#ButtonThree").hide();
	}
}

//Replies
function reply1() {
	$("#reply-text").html(scenarios[count].reply1);
	$("#reply-text").show();
	$("#ButtonFour").prop('disabled', false);
	$("#ButtonTwo, #ButtonThree").prop('disabled', true);
	score = score + scenarios[count].score1;
}
function reply2() {
	$("#reply-text").html(scenarios[count].reply2);
	$("#reply-text").show();
	$("#ButtonFour").prop('disabled', false);
	$("#ButtonOne, #ButtonThree").prop('disabled', true);
	score = score + scenarios[count].score2;
}
function reply3() {
	$("#reply-text").html(scenarios[count].reply3);
	$("#reply-text").show();
	$("#ButtonFour").prop('disabled', false);
	$("#ButtonOne, #ButtonTwo").prop('disabled', true);
	score = score + scenarios[count].score3;
}
	
//Next scenario
function next_scenario() {
	if(count >= 10){
		if(localStorage.getItem('Highscore') < score){
			localStorage.setItem('Highscore', score);
		}
		$("#scenario-text, #reply-text, #score-text, #ButtonOne, #ButtonTwo, #ButtonThree").hide();
		$("#EndCard").removeClass("hidden");
		$("#EndScore").html("Your score: " + score + "<br>Highscore: " + localStorage.getItem("Highscore"));
	}
	$("#reply-text").hide();
	$("#ButtonOne, #ButtonTwo, #ButtonThree").prop('disabled', false);
	$("#ButtonFour").prop('disabled', true);
	count++;
	text();
}