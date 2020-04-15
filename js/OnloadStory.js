window.onload = function onload() {
	$("#ButtonFour").prop('disabled', true);
	$("#reply-text").hide();
	if(window.innerWidth < 576){
	$("#ButtonOne").addClass("mobile btn-sm");
	$("#ButtonTwo").addClass("mobile btn-sm");
	$("#ButtonTwo").addClass("mobile btn-sm");
	$("#ButtonThree").addClass("mobile btn-sm");
	$("#ButtonFour").addClass("mobile btn-sm");
	}
	if(window.innerWidth > 576){
	$("#ButtonOne").addClass("desktop");
	$("#ButtonTwo").addClass("desktop");
	$("#ButtonTwo").addClass("desktop");
	$("#ButtonThree").addClass("desktop");
	$("#ButtonFour").addClass("desktop");
	}
	text();
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
	function next_scenario(mult) {
		count++;
		$("#reply-text").hide();
		$("#ButtonOne").prop('disabled', false).show();
		$("#ButtonTwo").prop('disabled', false).show();
		$("#ButtonThree").prop('disabled', false).show();
		$("#ButtonFour").show();
		quit = scenarios[count].quit;
		if(quit == true){
			$("#ButtonFour").hide();
		}
		text();
}