window.onload = function onload() {
	$("#ButtonFour").prop('disabled', true);
	$("#reply-text").hide();
	if(window.innerWidth < 576){
		$("#ButtonOne").addClass("btn-sm");
		$("#ButtonTwo").addClass("btn-sm");
		$("#ButtonTwo").addClass("btn-sm");
		$("#ButtonThree").addClass("btn-sm");
		$("#ButtonFour").addClass("btn-sm");
		}
	text();
}

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
	if(scenarios[count].answer1 == null && scenarios[count].answer2 == null && scenarios[count].answer3 == null){
		$("#ButtonFour").prop('disabled', false);
	}
	else{
		$("#ButtonFour").prop('disabled', true);
	}
}

//Replies
	function reply1() {
		if(scenarios[count].reply1 != null){
			$("#reply-text").html(scenarios[count].reply1);
			$("#reply-text").show();
		}
		$("#ButtonFour").prop('disabled', false);
		$("#ButtonTwo").prop('disabled', true);
		$("#ButtonThree").prop('disabled', true);
			if (scenarios[count].skipto1 != null){
				count = scenarios[count].skipto1;
			}
	}
	function reply2() {
		if(scenarios[count].reply2 != null){
			$("#reply-text").html(scenarios[count].reply2);
			$("#reply-text").show();
		}
		$("#ButtonFour").prop('disabled', false);
		$("#ButtonOne").prop('disabled', true);
		$("#ButtonThree").prop('disabled', true);
			if (scenarios[count].skipto2 != null){
				count = scenarios[count].skipto2;
			}
	}
	function reply3() {
		if(scenarios[count].reply3 != null){
			$("#reply-text").html(scenarios[count].reply3);
			$("#reply-text").show();
		}
		$("#ButtonFour").prop('disabled', false);
		$("#ButtonOne").prop('disabled', true);
		$("#ButtonTwo").prop('disabled', true);
			if (scenarios[count].skipto3 != null){
				count = scenarios[count].skipto3;
			}
	}

//Next scenario
	function next_scenario(mult){
		if(quit == true){
			endingcounter();
			$("#scenario-text").hide();
			$("#reply-text").hide();
			$("#ButtonOne").hide();
			$("#ButtonTwo").hide();
			$("#ButtonThree").hide();
			$("#ButtonFour").hide();
			document.getElementById("body").style.animationName = "endScreen";
			document.getElementById("body").style.animationDuration = "3s";
			document.getElementById("body").style.animationFillMode = "forwards";
		}
		else{
		count++;
		$("#reply-text").hide();
		$("#ButtonOne").prop('disabled', false).show();
		$("#ButtonTwo").prop('disabled', false).show();
		$("#ButtonThree").prop('disabled', false).show();
		$("#ButtonFour").show();
		quit = scenarios[count].quit;
		text();
	}
}