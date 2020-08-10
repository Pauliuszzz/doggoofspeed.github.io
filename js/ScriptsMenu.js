var clicks = 0;

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
    $("body").addClass("story");
    $("#story, nav").removeClass("hidden");
    $("body").removeClass("arcade survival");
    $("body").css("background-color", "#5E7668");
}

function ArcadeSwitch(){
	$("#home, #story, #survival").addClass("hidden");
    $("body").addClass("arcade");
    $("#arcade, nav").removeClass("hidden");
    $("body").removeClass("story survival");
    $("body").css("background-color", "#8E3E6C");
}
function SurvivalSwitch(){
	$("#home, #story, #arcade").addClass("hidden");
    $("body").addClass("survival");
    $("#survival, nav").removeClass("hidden");
    $("body").removeClass("story arcade");
    $("body").css("background-color", "#8E3939");
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
       $('#M4-play').addClass("disabled");
    }
if(localStorage.getItem("M3-Endings") != null){
    $('#M4').html("Conspiracists found: " + localStorage.getItem("M3-Endings") + "/3");
}
    else{
        $('#M4').html("Conspiracists found: 0/3");
    }

//Tells progress
if(localStorage.getItem('Highscore') > 0){
	$('#ArcadeMode').html("Highscore: " + localStorage.getItem('Highscore') + "<br>Average Score: " + localStorage.getItem('AverageHighscore') + "<br>Matches played: " + localStorage.getItem('ArcadeMatches'));
}
    else{
	    $('#ArcadeMode').html("Highscore: 0<br>Average Score: 0<br>Matches played: 0");
    }
if(localStorage.getItem('MaxSurvived') > 0){
	$('#SurvivalMode').html("Max scenarios survived: " + localStorage.getItem('MaxSurvived') + "<br>Average scenarios survived: " + localStorage.getItem('AverageCount') + "<br>Matches played: " + localStorage.getItem('SurvivalMatches'));
}
    else{
	    $('#SurvivalMode').html("Max scenarios survived: 0<br>Average scenarios survived: 0<br>Matches played: 0");
    }

//Clears progress
function clearArcade() {
    localStorage.removeItem('Highscore', 'AverageHighscore', 'ArcadeMatches');
    location.reload();
}

function clearArcade() {
    localStorage.removeItem('MaxSurvived', 'AverageCount', 'SurvivalMatches');
    location.reload();
}