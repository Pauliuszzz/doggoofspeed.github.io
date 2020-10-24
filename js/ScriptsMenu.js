$('body').append('<audio id="btnsfx1" src="resources/btnsfx1.ogg" preload="auto"></audio>', '<audio id="btnsfx2" src="resources/btnsfx2.ogg" preload="auto"></audio>', '<audio id="btnsfx3" src="resources/btnsfx3.ogg" preload="auto"></audio>', '<audio id="btnsfx4" src="resources/btnsfx4.ogg" preload="auto"></audio>');
window.onload = function onload() {
    switch (localStorage.getItem('sound')) {
        case 'true':
            $('.btnsoundy').css({'background': 'rgba(100,255,100,0.5)'});
            $('#home').removeClass('hidden');
            break;
        case 'false':
            $('.btnsoundn').css({'background': 'rgba(255,100,100,0.5)'});
            $('#home').removeClass('hidden');
            break;
        case null:
            SettingSwitch();
            $('.card, .settingsClose, .settingsbtn').addClass('hidden');
            $('setting, .soundpanel').removeClass('hidden');
            break;
    }
};

//Sound controller
function soundYes() {
    localStorage.setItem('sound', true);
    location.reload();
}

function soundNo() {
    localStorage.setItem('sound', false);
    location.reload();
}

//Switcher machanism
function StorySwitch(){
    $('#home, #arcade, #survival').addClass('hidden');
    $('#story, nav').removeClass('hidden');
    $('body').removeClass('arcade survival');
    $('body').css('background-color', '#5E7668');
    $('.modes').css('margin-bottom', '4em');
    if (localStorage.getItem('sound') == 'true') {
		document.getElementById('btnsfx1').play();
	}
}

function ArcadeSwitch() {
	$('#home, #story, #survival').addClass('hidden');
    $('#arcade, nav').removeClass('hidden');
    $('body').css('background-color', '#8E3E6C');
    $('.modes').css('margin-bottom', '4em');
    if (localStorage.getItem('sound') == 'true') {
		document.getElementById('btnsfx2').play();
	}
}

function SurvivalSwitch() {
	$('#home, #story, #arcade').addClass('hidden');
    $('#survival, nav').removeClass('hidden');
    $('body').css('background-color', '#8E3939');
    $('.modes').css('margin-bottom', '4em');
    if (localStorage.getItem('sound') == 'true') {
		document.getElementById('btnsfx3').play();
	}
}

function SettingSwitch() {
	$('#home, #story, #arcade, #survival').addClass('hidden');
    $('#setting, .settingsClose').removeClass('hidden');
    $('nav').addClass('hidden');
    if (localStorage.getItem('sound') == 'true') {
		document.getElementById('btnsfx3').play();
    }
}

//Story mode ending counter
if (localStorage.getItem('M1-Endings') != null) {
    $('#M1').html('Endings achieved: ' + localStorage.getItem('M1-Endings') + '/5');
    if (localStorage.getItem('M1-Endings') == 5) {
        $('.finM1').css('fill', 'gold');
    }
}
    else {
        $('#M1').html('Endings achieved: 0/5');
    }

if (localStorage.getItem('M2-Endings') != null) {
    $('#M2').html('Endings achieved: ' + localStorage.getItem('M2-Endings') + '/10');
    if (localStorage.getItem('M2-Endings') == 10) {
        $('.finM2').css('fill', 'gold');
    }
}
    else if (localStorage.getItem('M1-Endings') == null) {
        $('#M2').html('Finish previous missions to unlock');
        $('#M2-play').addClass('disabled');
    }
        else {
            $('#M2').html('Endings achieved: 0/10');
        }

if (localStorage.getItem('M3-Endings') != null) {
    $('#M3').html('Endings achieved: ' + localStorage.getItem('M3-Endings') + '/7');
    if (localStorage.getItem('M3-Endings') == 7) {
        $('.finM3').css('fill', 'gold');
    }
}
    else if (localStorage.getItem('M2-Endings') == null) {
        $('#M3').html('Finish previous missions to unlock');
        $('#M3-play').addClass('disabled');
    }   
        else {
            $('#M3').html('Endings achieved: 0/7');
            $('#M4-play').addClass('disabled');
        }

if (localStorage.getItem('M4-Endings') != null) {
    $('#M4').html('Conspiracists found: ' + localStorage.getItem('M4-Endings') + '/3');
    if (localStorage.getItem('M4-Endings') == 3) {
        $('.finM4').css('fill', 'gold');
    }
}
    else if (localStorage.getItem('M3-Endings') == null) {
        $('#M4').html('Finish previous missions to unlock');
        $('#M4-play').addClass('disabled');
    }
        else {
            $('#M4').html('Conspiracists found: 0/3');
        }

if (localStorage.getItem('M5-Endings') != null) {
    $('#M5').html('Endings achieved: ' + localStorage.getItem('M5-Endings') + '/?<br>Failures achieved:' + localStorage.getItem('M5-Failures') + '/?');
    if (localStorage.getItem('M5-Endings') == 3 && localStorage.getItem('M5-Endings') == 3) {
        $('.finM5').css('fill', 'gold');
    }
}
    else if (localStorage.getItem('M4-Endings') == null) {
        $('#M5').html('Find all the conspirators to unlock');
        $('#M5-play').addClass('disabled');
    }
        else {
            $('#M5').html('Endings achieved: 0/?<br>Failures achieved: 0/?');
            }

//Tells progress
if(localStorage.getItem('Highscore') > 0){
	$('#ArcadeMode').html('Highscore: ' + localStorage.getItem('Highscore') + '<br>Average Score: ' + Math.round(localStorage.getItem('AverageHighscore')) + '<br>Matches played: ' + localStorage.getItem('ArcadeMatches'));
}
    else{
	    $('#ArcadeMode').html('Highscore: 0<br>Average Score: 0<br>Matches played: 0');
    }
if (localStorage.getItem('MaxSurvived') > 0 && localStorage.getItem('MaxSurvivedHard') > 0){
	$('#SurvivalMode').html('Max scenarios survived: ' + localStorage.getItem('MaxSurvived') + '<br>Max scenarios survived (hard): ' + localStorage.getItem('MaxSurvivedHard') +'<br>Average scenarios survived: ' + Math.round(localStorage.getItem('AverageCount')) + '<br>Matches played: ' + localStorage.getItem('SurvivalMatches'));
}
    else if (localStorage.getItem('MaxSurvived') > 0 && localStorage.getItem('MaxSurvivedHard') == null) {
	    $('#SurvivalMode').html('Max scenarios survived: ' + localStorage.getItem('MaxSurvived') + '<br>Max scenarios survived (hard): 0<br>Average scenarios survived: ' + Math.round(localStorage.getItem('AverageCount')) + '<br>Matches played: ' + localStorage.getItem('SurvivalMatches'));
    }
    else if (localStorage.getItem('MaxSurvived') == null && localStorage.getItem('MaxSurvivedHard') > 0){
	    $('#SurvivalMode').html('Max scenarios survived: 0<br>Max scenarios survived (hard): ' + localStorage.getItem('MaxSurvivedHard') +'<br>Average scenarios survived: ' + Math.round(localStorage.getItem('AverageCount')) + '<br>Matches played: ' + localStorage.getItem('SurvivalMatches'));
    }
    else {
	    $('#SurvivalMode').html('Max scenarios survived: 0<br>Max scenarios survived(hard): 0<br>Average scenarios survived: 0<br>Matches played: 0');
    }
if (localStorage.getItem('MaxSurvived') == 20) {
    $('.normal').css('fill', 'gold');
}
if (localStorage.getItem('MaxSurvivedHard') == 20) {
    $('.hard').css('fill', 'gold');
}

//Clears progress
function resetEverything() {
    localStorage.clear();
    location.reload();
}