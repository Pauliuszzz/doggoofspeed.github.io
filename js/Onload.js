window.onload = function onload() {
	$("#ButtonFour").prop('disabled', true);
	$("#reply-text").hide()
	if(window.innerWidth < 576){
	$("#ButtonOne").addClass("btn-sm")
	$("#ButtonTwo").addClass("btn-sm")
	$("#ButtonTwo").addClass("btn-sm")
	$("#ButtonThree").addClass("btn-sm")
	$("#ButtonFour").addClass("btn-sm")
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
//Replies
function reply1() {
	$("#reply-text").html(scenarios[sc].reply1);
	$("#reply-text").show();
	$("#ButtonFour").prop('disabled', false);
	$("#ButtonTwo").prop('disabled', true);
	$("#ButtonThree").prop('disabled', true);
	score = score + scenarios[sc].score1;
}
function reply2() {
	$("#reply-text").html(scenarios[sc].reply2);
	$("#reply-text").show();
	$("#ButtonFour").prop('disabled', false);
	$("#ButtonOne").prop('disabled', true);
	$("#ButtonThree").prop('disabled', true);
	score = score + scenarios[sc].score2;
}
function reply3() {
	$("#reply-text").html(scenarios[sc].reply3);
	$("#reply-text").show();
	$("#ButtonFour").prop('disabled', false);
	$("#ButtonOne").prop('disabled', true);
	$("#ButtonTwo").prop('disabled', true);
	score = score + scenarios[sc].score3;
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