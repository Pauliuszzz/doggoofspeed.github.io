var count = 0;
var hp = 100;

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
	if (scenarios[count].answer1 == null) {
		$("#ButtonOne").hide();
	}
	if (scenarios[count].answer2 == null) {
		$("#ButtonTwo").hide();
	}
	if (scenarios[count].answer3 == null) {
		$("#ButtonThree").hide();
	}
	if(hp >= 0){
		$("#hp-text").html(hp);
	}
	if(hp <= 0){
		$("#hp-text").html("0");
	}
}

//Replies
function reply1() {
	$("#reply-text").html(scenarios[count].reply1);
	$("#reply-text").show();
	$("#ButtonFour").prop('disabled', false);
	$("#ButtonTwo").prop('disabled', true);
	$("#ButtonThree").prop('disabled', true);
	hp = hp - scenarios[count].damage1;
}
function reply2() {
	$("#reply-text").html(scenarios[count].reply2);
	$("#reply-text").show();
	$("#ButtonFour").prop('disabled', false);
	$("#ButtonOne").prop('disabled', true);
	$("#ButtonThree").prop('disabled', true);
	hp = hp - scenarios[count].damage2;
}
function reply3() {
	$("#reply-text").html(scenarios[count].reply3);
	$("#reply-text").show();
	$("#ButtonFour").prop('disabled', false);
	$("#ButtonOne").prop('disabled', true);
	$("#ButtonTwo").prop('disabled', true);
	hp = hp - scenarios[count].damage3;
}
	
//Next scenario
function next_scenario(mult) {
	if(hp <= 0 || count == 18){
		if(localStorage.getItem('MaxSurvived') < count){
			localStorage.setItem('MaxSurvived', count);
		}
		if(count == 18){
			$("#EndCard").removeClass("hidden");
		}
		if(hp <= 0){
			$("#DeadCard").removeClass("hidden");
		}
		$("#scenario-text").hide();
		$("#reply-text").hide();
		$("#hp-text").hide();
		$("#ButtonOne").hide();
		$("#ButtonTwo").hide();
		$("#ButtonThree").hide();
		$("#EndText").html("You finally reached your destination - a shop. You bought some eggs and some bread. Welp time to go home...");
		$("#DeadText").html("Scenarios survived: " + count + "<br>Max scenarios survived: " + localStorage.getItem("MaxSurvived"));
	}
	if(hp < 100) {
		hp = hp + 5;
	}
	count++;
	$("#progressslider").width(hp);
	$("#reply-text").hide();
	$("#ButtonOne").prop('disabled', false);
	$("#ButtonTwo").prop('disabled', false);
	$("#ButtonThree").prop('disabled', false);
	$("#ButtonFour").prop('disabled', true);
	text();
}