var count = 0;
var score = 0;

window.onload = function onload() {
	$("#ButtonFour").prop('disabled', true);
	$("#reply-text").hide();
	if(window.innerWidth < 576){
		$("#ButtonOne").addClass("btn-sm");
		$("#ButtonTwo").addClass("btn-sm");
		$("#ButtonThree").addClass("btn-sm");
		$("#ButtonFour").addClass("btn-sm");
	}
	var i = scenarios.length, k , temp;
	while(--i > 0){
		k = Math.floor(Math.random() * (i+1));
		temp = scenarios[k];
		scenarios[k] = scenarios[i];
		scenarios[i] = temp;
	}
	text();
}

//Text
function text() {
	$("#scenario-text").html(scenarios[count].scenario);
	$("#ButtonOne").html(scenarios[count].answer1);
	$("#ButtonTwo").html(scenarios[count].answer2);
	$("#ButtonThree").html(scenarios[count].answer3);
	$("#score-text").html("Score: " + score);
	if(count >= 10){
		$("#scenario-text").html("Your final score is:");
		$("#ButtonOne").hide();
		$("#ButtonTwo").hide();
		$("#ButtonThree").hide();
		$("#ButtonFour").hide();
		if(localStorage.getItem('Highscore') < score){
			localStorage.setItem('Highscore', score);
		}
	}
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
	$("#ButtonTwo").prop('disabled', true);
	$("#ButtonThree").prop('disabled', true);
	score = score + scenarios[count].score1;
}
function reply2() {
	$("#reply-text").html(scenarios[count].reply2);
	$("#reply-text").show();
	$("#ButtonFour").prop('disabled', false);
	$("#ButtonOne").prop('disabled', true);
	$("#ButtonThree").prop('disabled', true);
	score = score + scenarios[count].score2;
}
function reply3() {
	$("#reply-text").html(scenarios[count].reply3);
	$("#reply-text").show();
	$("#ButtonFour").prop('disabled', false);
	$("#ButtonOne").prop('disabled', true);
	$("#ButtonTwo").prop('disabled', true);
	score = score + scenarios[count].score3;
}
	
//Next scenario
function next_scenario(mult) {
	count++;
	$("#reply-text").hide();
	$("#ButtonOne").prop('disabled', false);
	$("#ButtonTwo").prop('disabled', false);
	$("#ButtonThree").prop('disabled', false);
	$("#ButtonFour").prop('disabled', true);
	text();
}