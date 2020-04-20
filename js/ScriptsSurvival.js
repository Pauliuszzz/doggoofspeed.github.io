var sc = 0;
var hp = 100;

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
	$("#scenario-text").html(scenarios[sc].scenario);
	$("#ButtonOne").html(scenarios[sc].answer1);
	$("#ButtonTwo").html(scenarios[sc].answer2);
	$("#ButtonThree").html(scenarios[sc].answer3);
	if (scenarios[count].answer1 == null) {
		$("#ButtonOne").hide();
	}
	if (scenarios[count].answer2 == null) {
		$("#ButtonTwo").hide();
	}
	if (scenarios[count].answer3 == null) {
		$("#ButtonThree").hide();
	}
	if(hp >=0){
		$("#hp-text").html("HP: " + hp);
	}
	if(hp < 0){
		$("#hp-text").html("HP: 0");
	}
	if(hp <= 0 || sc == 17){
		if(sc == 17){
			$("#scenario-text").html("You finally reached your destination - a shop. You bought some eggs and some bread. Welp time to go home...");
		}
		if(hp <= 0){
			$("#scenario-text").html("You have died. To go to the main menu, press the home button.");
		}
		$("#ButtonOne").hide();
		$("#ButtonTwo").hide();
		$("#ButtonThree").hide();
		$("#ButtonFour").hide();
		if(localStorage.getItem('MaxSurvived') < sc){
			localStorage.setItem('MaxSurvived', sc);
		}
	}
}

//Replies
function reply1() {
	$("#reply-text").html(scenarios[sc].reply1);
	$("#reply-text").show();
	$("#ButtonFour").prop('disabled', false);
	$("#ButtonTwo").prop('disabled', true);
	$("#ButtonThree").prop('disabled', true);
	hp = hp - scenarios[sc].damage1;
}
function reply2() {
	$("#reply-text").html(scenarios[sc].reply2);
	$("#reply-text").show();
	$("#ButtonFour").prop('disabled', false);
	$("#ButtonOne").prop('disabled', true);
	$("#ButtonThree").prop('disabled', true);
	hp = hp - scenarios[sc].damage2;
}
function reply3() {
	$("#reply-text").html(scenarios[sc].reply3);
	$("#reply-text").show();
	$("#ButtonFour").prop('disabled', false);
	$("#ButtonOne").prop('disabled', true);
	$("#ButtonTwo").prop('disabled', true);
	hp = hp - scenarios[sc].damage3;
}
	
//Next scenario
function next_scenario(mult) {
    sc++;
	$("#reply-text").hide();
	$("#ButtonOne").prop('disabled', false);
	$("#ButtonTwo").prop('disabled', false);
	$("#ButtonThree").prop('disabled', false);
	$("#ButtonFour").prop('disabled', true);
    text();
}