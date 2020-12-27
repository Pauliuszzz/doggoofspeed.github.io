//Checks if snow should be added
var d = new Date();
var n = d.getMonth();

if ( n == 11 || n == 0 || n == 1 ) {
  var snow = document.createElement('script')
  snow.setAttribute("type","text/javascript")
  snow.setAttribute("src", "js/snowstorm-min.js")
  document.getElementsByTagName("body")[0].appendChild(snow)
}

if (!localStorage.getItem('ArcadeMatches')) {localStorage.setItem('ArcadeMatches', 0)}
if (!localStorage.getItem('SurvivalMatches')) {localStorage.setItem('SurvivalMatches', 0)}
if (!localStorage.getItem('M1-Endings')) {localStorage.setItem('M1-Endings', JSON.stringify(['0', '0', '0', '0', '0']))}
if (!localStorage.getItem('M2-Endings')) {localStorage.setItem('M2-Endings', JSON.stringify(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']))}
if (!localStorage.getItem('M3-Endings')) {localStorage.setItem('M3-Endings', JSON.stringify(['0', '0', '0', '0', '0', '0', '0']))}
if (!localStorage.getItem('M4-Endings')) {localStorage.setItem('M4-Endings', JSON.stringify(['0', '0', '0']))}
if (!localStorage.getItem('M5-Endings')) {localStorage.setItem('M5-Endings', JSON.stringify(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0']))}
if (!localStorage.getItem('M5-Failures')) {localStorage.setItem('M5-Failures', JSON.stringify(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0']))}

window.onload = function onload() {
  arcadeLevel()
  survivalLevel()
  switch (localStorage.getItem('sound')) {
    case 'true':
      $('body').append('<audio id="btnsfx1" src="resources/btnsfx1.ogg"></audio>', '<audio id="btnsfx2" src="resources/btnsfx2.ogg"></audio>', '<audio id="btnsfx3" src="resources/btnsfx3.ogg"></audio>', '<audio id="btnsfx4" src="resources/btnsfx4.ogg"></audio>');
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
function sound(yn) {
  if (yn == 0) {
    localStorage.setItem('sound', true)
  }
  else if (yn == 1) { 
    localStorage.setItem('sound', false) 
  }
  location.reload();
}

//Arcade Levels
function arcadeLevel() {
  switch (localStorage.getItem('ArcadeLevel')) {
    case null:
    case '0':
      localStorage.setItem('ArcadeLevel', 0);
      $('#arcadeUpgrade').html('Matches played: <i>' + localStorage.getItem('ArcadeMatches') + '/3</i><br>Award: <i>Match length (5 > 7)</i>');
      if (localStorage.getItem('ArcadeMatches') >= 3) {
        $('.aLevelUp').removeClass('disabled');
      }
      break;
    case '1':
      $('#arcadeUpgrade').html('Highscore: <i>' + localStorage.getItem('Highscore') + '/5000</i><br>Award: <i>More Scenarios</i>')
      if (localStorage.getItem('Highscore') >= 5000) {
        $('.aLevelUp').removeClass('disabled');
      }
      break;
    case '2':
      $('#arcadeUpgrade').html('Average Highscore: <i>' + Math.round(localStorage.getItem('AverageHighscore')) + '/5000</i><br>Award: <i>New Background</i>')
      if (Math.round(localStorage.getItem('AverageHighscore')) >= 5000) {
        $('.aLevelUp').removeClass('disabled');
      }
      break;
    case '3':
      $('#arcadeUpgrade').html('1000XP gotten in one game: <i>' + localStorage.getItem('kXPstrg') + '/5</i><br>Award: <i>New Music</i>')
      if (localStorage.getItem('kXPstrg') >= 5) {
        $('.aLevelUp').removeClass('disabled');
      }
      break;
  }
}

function LevelUpA() {
  let al = parseInt(localStorage.getItem('ArcadeLevel'));
  localStorage.setItem('ArcadeLevel', al + 1);
  $('.aLevelH2').html('Level ' + (parseInt(localStorage.getItem('ArcadeLevel')) + 1))
  arcadeLevel()
}

//Survival Levels
function survivalLevel() {
  switch (localStorage.getItem('SurvivalLevel')) {
    case null:
    case '0':
      localStorage.setItem('SurvivalLevel', 0);
      $('#survivalUpgrade').html('Matches played: <i>' + localStorage.getItem('SurvivalMatches') + '/3</i><br>Award: <i>Match length from 5 to 10</i>');
      if (localStorage.getItem('SurvivalMatches') >= 3) {
        $('.sLevelUp').removeClass('disabled');
      }
      break;
  }
}

function LevelUpS() {
  let sl = parseInt(localStorage.getItem('SurvivalLevel'));
  localStorage.setItem('SurvivalLevel', sl + 1);
  $('.sLevelH2').html('Level ' + (parseInt(localStorage.getItem('SurvivalLevel')) + 1))
  survivalLevel()
}

$('.aLevelH2').html('Level ' + (parseInt(localStorage.getItem('ArcadeLevel')) + 1))
$('.sLevelH2').html('Level ' + (parseInt(localStorage.getItem('SurvivalLevel')) + 1))

//Switcher machanism
function StorySwitch(){
  $('#home, #arcade, #survival').addClass('hidden');
  $('#story, nav').removeClass('hidden');
  $('body').removeClass('arcade survival');
  $('body').css('background-color', '#5E7668');
  $('.modes').css('margin-bottom', '4em');
  if (localStorage.getItem('sound') == 'true') {
		$('#btnsfx1').get(0).play();
	}
}

function ArcadeSwitch() {
	$('#home, #story, #survival').addClass('hidden');
  $('#arcade, nav').removeClass('hidden');
  $('body').css('background-color', '#8E3E6C');
  $('.modes').css('margin-bottom', '4em');
  if (localStorage.getItem('sound') == 'true') {
		$('#btnsfx2').get(0).play();
	}
}

function SurvivalSwitch() {
	$('#home, #story, #arcade').addClass('hidden');
  $('#survival, nav').removeClass('hidden');
  $('body').css('background-color', '#8E3939');
  $('.modes').css('margin-bottom', '4em');
  if (localStorage.getItem('sound') == 'true') {
		$('#btnsfx3').get(0).play();
	}
}

function SettingSwitch() {
	$('#home, #story, #arcade, #survival').addClass('hidden');
  $('#setting, .settingsClose').removeClass('hidden');
  $('nav').addClass('hidden');
  if (localStorage.getItem('sound') == 'true') {
		$('#btnsfx3').get(0).play();
  }
}

function StatSwitch() {
  $('#setting').addClass('hidden');
  $('#stats').removeClass('hidden');
  if (localStorage.getItem('sound') == 'true') {
		$('#btnsfx3').get(0).play();
  }
}

//Story mode ending counter
$('#M1').html('Endings achieved: ' + JSON.parse(localStorage.getItem('M1-Endings')).filter(x => x == '1').length + '/5');
if (JSON.parse(localStorage.getItem('M1-Endings')).filter(x => x == '1').length == 5) {
  $('.finM1').css('fill', 'gold');
}
  //Mission 2
if (JSON.parse(localStorage.getItem('M1-Endings')).filter(x => x == '1').length > 0) {
  $('#M2').html('Endings achieved: ' + JSON.parse(localStorage.getItem('M2-Endings')).filter(x => x == '1').length + '/10');
  if (JSON.parse(localStorage.getItem('M2-Endings')).filter(x => x == '1').length == 10) {
    $('.finM2').css('fill', 'gold');
  }
}
  else if (JSON.parse(localStorage.getItem('M1-Endings')).filter(x => x == '1').length == 0) {
    $('#M2').html('Finish previous missions to unlock');
    $('#M2-play').addClass('disabled');
  }
  //Mission 3
if (JSON.parse(localStorage.getItem('M2-Endings')).filter(x => x == '1').length > 0) {
  $('#M3').html('Endings achieved: ' + JSON.parse(localStorage.getItem('M3-Endings')).filter(x => x == '1').length + '/7');
  if (JSON.parse(localStorage.getItem('M3-Endings')).filter(x => x == '1').length == 7) {
    $('.finM3').css('fill', 'gold');
  }
}
  else if (JSON.parse(localStorage.getItem('M2-Endings')).filter(x => x == '1').length == 0) {
    $('#M3').html('Finish previous missions to unlock');
    $('#M3-play').addClass('disabled');
  }
  //Mission 4
if (JSON.parse(localStorage.getItem('M3-Endings')).filter(x => x == '1').length > 0) {
  $('#M4').html('Conspiracists found: ' + JSON.parse(localStorage.getItem('M4-Endings')).filter(x => x == '1').length + '/3');
  if (JSON.parse(localStorage.getItem('M4-Endings')).filter(x => x == '1').length == 3) {
    $('.finM4').css('fill', 'gold');
  }
}
  else if (JSON.parse(localStorage.getItem('M3-Endings')).filter(x => x == '1').length == 0) {
    $('#M4').html('Finish previous missions to unlock');
    $('#M4-play').addClass('disabled');
  }
  //Mission 5
if (JSON.parse(localStorage.getItem('M4-Endings')).filter(x => x == '1').length > 2) {
  $('#M5').html('Endings achieved: ' + JSON.parse(localStorage.getItem('M5-Endings')).filter(x => x == '1').length + '/12<br>Failures achieved: ' + JSON.parse(localStorage.getItem('M5-Failures')).filter(x => x == '1').length + '/17');
  if (JSON.parse(localStorage.getItem('M5-Endings')).filter(x => x == '1').length == 12 && JSON.parse(localStorage.getItem('M4-Failures')).filter(x => x == '1').length == 17) {
    $('.finM5').css('fill', 'gold');
  }
}
  else if (JSON.parse(localStorage.getItem('M4-Endings')).filter(x => x == '1').length < 3) {
    $('#M5').html('Find all the conspirators to unlock');
    $('#M5-play').addClass('disabled');
  }

//Tells progress
if (localStorage.getItem('Highscore') > 0){
	$('#ArcadeMode').html('Highscore: ' + localStorage.getItem('Highscore') + '<br>Average Score: ' + Math.round(localStorage.getItem('AverageHighscore')) + '<br>Matches played: ' + localStorage.getItem('ArcadeMatches'));
}
  else{
	  $('#ArcadeMode').html('Highscore: 0<br>Average Score: 0<br>Matches played: 0');
  }
if (localStorage.getItem('MaxSurvived') > 0) {
	$('#SurvivalMode').html('Max scenarios survived: ' + localStorage.getItem('MaxSurvived') +'<br>Average scenarios survived: ' + Math.round(localStorage.getItem('AverageCount')) + '<br>Matches played: ' + localStorage.getItem('SurvivalMatches'));
}
    else {
	    $('#SurvivalMode').html('Max scenarios survived: 0<br>Average scenarios survived: 0<br>Matches played: 0');
    }
if (localStorage.getItem('MaxSurvived') == 20) {
    $('.normal').css('fill', 'gold');
}

//Clears progress
function resetEverything() {
  localStorage.clear();
  location.reload();
}