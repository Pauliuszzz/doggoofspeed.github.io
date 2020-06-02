var count = 0;
var score = 0;

window.onload = function onload() {
	if(window.innerWidth < 768){
		$("#ButtonOne").addClass("btn-sm");
		$("#ButtonTwo").addClass("btn-sm");
		$("#ButtonThree").addClass("btn-sm");
		$("#ButtonFour").addClass("btn-sm");
	}
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
	if(count >= 10){
		if(localStorage.getItem('Highscore') < score){
			localStorage.setItem('Highscore', score);
		}
		$("#scenario-text").hide();
		$("#reply-text").hide();
		$("#score-text").hide();
		$("#ButtonOne").hide();
		$("#ButtonTwo").hide();
		$("#ButtonThree").hide();
		$("#ButtonFour").hide();
		$("#EndCard").removeClass("hidden");
		$("#EndScore").html("Your score: " + score + "<br>Highscore: " + localStorage.getItem("Highscore"));
	}
	count++;
	$("#reply-text").hide();
	$("#ButtonOne").prop('disabled', false);
	$("#ButtonTwo").prop('disabled', false);
	$("#ButtonThree").prop('disabled', false);
	$("#ButtonFour").prop('disabled', true);
	text();
}