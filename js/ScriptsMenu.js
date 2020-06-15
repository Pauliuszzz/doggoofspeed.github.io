//Main scripts
var clicks = 0;
var missionsDone = 0;
$('.popover-dismiss').popover({
	trigger: 'focus'
})
$(function () {
	$('[data-toggle="popover"]').popover()
})
//Tells progress
if(localStorage.getItem('M1-Endings') >= 1){
	missionsDone++;
}
if(localStorage.getItem('M2-Endings') >= 1){
	missionsDone++;
}
$('#StoryMode').html("Missions completed: " + missionsDone + "/2");
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
	document.getElementById("home").classList.add("hidden");
	document.getElementById("story").classList.remove("hidden");
	document.getElementById("arcade").classList.add("hidden");
    document.getElementById("survival").classList.add("hidden");
    document.getElementById("body").classList.add("story");
    document.getElementById("body").classList.remove("arcade");
    document.getElementById("body").classList.remove("survival");
}

function ArcadeSwitch(){
	document.getElementById("home").classList.add("hidden");
	document.getElementById("story").classList.add("hidden");
	document.getElementById("arcade").classList.remove("hidden");
    document.getElementById("survival").classList.add("hidden");
    document.getElementById("body").classList.add("arcade");
    document.getElementById("body").classList.remove("story");
    document.getElementById("body").classList.remove("survival");
}
function SurvivalSwitch(){
	document.getElementById("home").classList.add("hidden");
	document.getElementById("story").classList.add("hidden");
	document.getElementById("arcade").classList.add("hidden");
    document.getElementById("survival").classList.remove("hidden");
    document.getElementById("body").classList.add("survival");
    document.getElementById("body").classList.remove("story");
    document.getElementById("body").classList.remove("arcade");

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
    }