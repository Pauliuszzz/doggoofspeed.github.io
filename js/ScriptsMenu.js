window.onload = function onload() {
    switch (localStorage.getItem('sound')) {
        case 'true':
            $('.btnsoundy').css({'background': 'rgba(100,255,100,0.5)'});
            break;
        case 'false':
            $('.btnsoundn').css({'background': 'rgba(255,100,100,0.5)'});
            break;
        case null:
            $('.settingpanel, .settingsClose').addClass('hidden');
            $('.settingbg, .soundpanel').removeClass('hidden');
            break;
    }
    switch (localStorage.getItem('fx')) {
        case 'true':
            $('.btnfxy').css({'background': 'rgba(100,255,100,0.5)'});
            break;
        case 'false':
            $('.btnfxn').css({'background': 'rgba(255,100,100,0.5)'});
            $('.settingbg').css({'backdrop-filter': 'none', 'background-color': '#2c2c2c'});
            $('nav').css({'backdrop-filter': 'none'});
            $('.flexhome > div, .flexmissions > div, .flexarcadesurvival > div').css({'animation': 'none'});
            break;
        case null:
            localStorage.setItem('fx', true);
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

//Fx controller

function fxYes() {
    localStorage.setItem('fx', true);
    location.reload();
}

function fxNo() {
    localStorage.setItem('fx', false);
    location.reload();
}

//Switcher machanism
function StorySwitch(){
    $('#home, #arcade, #survival').addClass('hidden');
    $('body').addClass('story');
    $('#story, nav').removeClass('hidden');
    $('body').removeClass('arcade survival');
    $('body').css('background-color', '#5E7668');
    if (localStorage.getItem('fx') == 'false') {
        $('.acrylic').css({'background-color': '#2E3933'})
    }
    if (localStorage.getItem('sound') == 'true') {
		document.getElementById('btnsfx1').play();
	}
}

function ArcadeSwitch(){
	$('#home, #story, #survival').addClass('hidden');
    $('body').addClass('arcade');
    $('#arcade, nav').removeClass('hidden');
    $('body').removeClass('story survival');
    $('body').css('background-color', '#8E3E6C');
    if (localStorage.getItem('fx') == 'false') {
        $('.acrylic').css({'background-color': '#451E35'})
    }
    if (localStorage.getItem('sound') == 'true') {
		document.getElementById('btnsfx2').play();
	}
}

function SurvivalSwitch(){
	$('#home, #story, #arcade').addClass('hidden');
    $('body').addClass('survival');
    $('#survival, nav').removeClass('hidden');
    $('body').removeClass('story arcade');
    $('body').css('background-color', '#8E3939');
    if (localStorage.getItem('fx') == 'false') {
        $('.acrylic').css({'background-color': '#451C1C'})
    }
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
function clearStory() {
    let keysToRemove = ['M1-Endings', 'M2-Endings', 'M3-Endings', 'M4-Endings', 'M1-1', 'M1-2', 'M1-3', 'M1-4', 'M1-5', 'M2-1', 'M2-2', 'M2-3', 'M2-4', 'M2-5', 'M2-6', 'M2-7', 'M2-8', 'M2-9', 'M2-10', 'M3-1', 'M3-2', 'M3-3', 'M3-4', 'M3-5', 'M3-6', 'M3-7', 'M4-1', 'M4-2', 'M4-3'];
    for (key of keysToRemove) {
        localStorage.removeItem(key);
    }
    location.reload();
}

function clearArcade() {
    let keysToRemove = ['Highscore', 'AverageHighscore', 'ArcadeMatches'];
    for (key of keysToRemove) {
        localStorage.removeItem(key);
    }
    location.reload();
}

function clearSurvival() {
    let keysToRemove = ['MaxSurvived', 'AverageCount', 'SurvivalMatches'];
    for (key of keysToRemove) {
        localStorage.removeItem(key);
    }
    location.reload();
}

//Opens Settings Menu
function settings() {
    $('.settingbg').removeClass('hidden');
    $('.modes, nav').addClass('hidden');
}