var clicks = 0;
//Tells progress
if(localStorage.getItem('Highscore') > 0){
	$('#ArcadeMode').html("Highscore: " + localStorage.getItem('Highscore'));
}
    else{
	$('#ArcadeMode').html("Highscore: 0");
    }
if(localStorage.getItem('MaxSurvived') > 0){
	$('#SurvivalMode').html("Max scenarios survived: " + localStorage.getItem('MaxSurvived'));
}
    else{
	    $('#SurvivalMode').html("Max scenarios survived: 0");
    }

//Debugging easter egg
function clearStorage(){
	if(clicks < 5){
		clicks++;
	}
	if(clicks == 5){
		alert("You have found an easter egg. Your save data has been deleted.");
		localStorage.clear();
		location.reload();
	}
}

//Switcher machanism
function StorySwitch(){
    $("#home, #arcade, #survival").addClass("hidden");
    $("#body").addClass("story");
    $("#story").removeClass("hidden");
    $("#body").removeClass("arcade survival");
}

function ArcadeSwitch(){
	$("#home, #story, #survival").addClass("hidden");
    $("#body").addClass("arcade");
    $("#arcade").removeClass("hidden");
    $("#body").removeClass("story survival");
}
function SurvivalSwitch(){
	$("#home, #story, #arcade").addClass("hidden");
    $("#body").addClass("survival");
    $("#survival").removeClass("hidden");
    $("#body").removeClass("story arcade");
}

//Story mode ending counter
if(localStorage.getItem("M1-Endings") != null){
    $('#M1').html("Endings achieved: " + localStorage.getItem("M1-Endings") + "/5");
}
    else{
        $('#M1').html("Endings achieved: 0/5");
        $('#M2-play').addClass("disabled");
    }
if(localStorage.getItem("M2-Endings") != null){
    $('#M2').html("Endings achieved: " + localStorage.getItem("M2-Endings") + "/10");
}
    else{
        $('#M2').html("Endings achieved: 0/10");
        $('#M3-play').addClass("disabled");
    }
if(localStorage.getItem("M3-Endings") != null){
    $('#M3').html("Endings achieved: " + localStorage.getItem("M3-Endings") + "/7");
}
    else{
       $('#M3').html("Endings achieved: 0/7");
    }