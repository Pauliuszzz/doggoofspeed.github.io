var count = 0;
var score = 0;
var kXP = 0;
localStorage.setItem('kXPstrg', 0)

window.onload = function onload() {
  if (localStorage.getItem('sound') == 'true') {
		$('body').append('<audio id="btnsfx" src="../resources/abtnsfx.ogg"></audio>', '<audio id="endCard" src="../resources/aendCard.ogg"></audio>')
		loopify("../resources/Arcade2.ogg");
  }
	$('#ButtonFour').addClass('disabled');
	$('.replydiv').hide();
	switch (parseInt(localStorage.getItem('ArcadeLevel'))) {
		case 9:
		case 8:
		case 7:
		case 6:
		case 5:
		case 4:
			scenarios = scenarios1.concat(scenarios2);
			var musicNumber = 2;
			var bgNumber = 2;
			var maxLength = 9;
			break;
		case 3:
			scenarios = scenarios1.concat(scenarios2);
			var musicNumber = 1;
			var bgNumber = 2;
			var maxLength = 9;
			break;
		case 2:
			scenarios = scenarios1.concat(scenarios2);
			var musicNumber = 1;
			var bgNumber = 1;
			var maxLength = 9;
			break;
		case 1:
			scenarios = scenarios1;
			var musicNumber = 1;
			var bgNumber = 1;
			var maxLength = 9;
			break;
		case 0:
			scenarios = scenarios1;
			var musicNumber = 1;
			var bgNumber = 1;
			var maxLength = 4;
			break;
	}
	switch (Math.floor(Math.random() * Math.floor(bgNumber))){
		case 0:
			$('body').css('background', 'repeating-linear-gradient(-45deg, transparent, transparent 3px, #2a2329 3px, #2a2329 30px ) fixed, linear-gradient(to bottom right, #F19, #0CF)');
			break;
		case 1:
			$('body').css({'background': 'url(../resources/statue.png) center repeat fixed, #008080', 'background-size': '50%'})
			if ($(window).width() >= 1280) {
				$('body').css('background-size', '25%')
			}
			break;
		case 2:
			$('body').css({'background': 'url(../resources/pattern.jpg) center repeat fixed, #008080', 'background-size': '25%'})
			if ($(window).width() >= 1280) {
				$('body').css('background-size', '10%')
			}
			break;
	}
	
	switch (Math.floor(Math.random() * Math.floor(musicNumber))){
		case 0:
			var theme = new Audio('../resources/Arcade1.ogg');
			break;
		case 1:
			var theme = new Audio('../resources/Arcade2.ogg');
			break;
		case 2:
			break;
	}
	shuffle(scenarios);
	text();
};

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
	$('#scenario-text').html(scenarios[count].scenario);
	$('#ButtonOne').html(scenarios[count].answer1);
	$('#ButtonTwo').html(scenarios[count].answer2);
	$('#ButtonThree').html(scenarios[count].answer3);
	$('#score-text').html('Score: ' + score);
	if (scenarios[count].answer1 == null) {
		$('#ButtonOne').hide();
	}
	if (scenarios[count].answer2 == null) {
		$('#ButtonTwo').hide();
	}
	if (scenarios[count].answer3 == null) {
		$('#ButtonThree').hide();
	}
}

//Replies
function reply1() {
	$('#reply-text').html(scenarios[count].reply1);
	$('.replydiv').show();
	$('#ButtonFour').removeClass('disabled');
	$('#ButtonTwo, #ButtonThree').addClass('disabled');
	score = score + scenarios[count].score1;
	if ($('.xpmessage').hasClass('hidden') == true) {
		$('.xptext').html('+' + scenarios[count].score1 + 'Xp');
	}
	if (scenarios[count].score1 == 1000) {
		kXP++
	}
	if (localStorage.getItem('sound') == 'true') {
		document.getElementById('btnsfx').play();
	}
}
function reply2() {
	$('#reply-text').html(scenarios[count].reply2);
	$('.replydiv').show();
	$('#ButtonFour').removeClass('disabled');
	$('#ButtonOne, #ButtonThree').addClass('disabled');
	score = score + scenarios[count].score2;
	if ($('.xpmessage').hasClass('hidden') == true) {
		$('.xptext').html('+' + scenarios[count].score2 + 'Xp');
	}
	if (scenarios[count].score2 == 1000) {
		kXP++
	}
	if (localStorage.getItem('sound') == 'true') {
		document.getElementById('btnsfx').play();
	}
}
function reply3() {
	$('#reply-text').html(scenarios[count].reply3);
	$('.replydiv').show();
	$('#ButtonFour').removeClass('disabled');
	$('#ButtonOne, #ButtonTwo').addClass('disabled');
	score = score + scenarios[count].score3;
	if ($('.xpmessage').hasClass('hidden') == true) {
		$('.xptext').html('+' + scenarios[count].score3 + 'Xp');
	}
	if (scenarios[count].score3 == 1000) {
		kXP++
	}
	if (localStorage.getItem('sound') == 'true') {
		document.getElementById('btnsfx').play();
	}
}
	
//Next scenario
function nextScenario() {
	if (count >= maxLength){
		if (localStorage.getItem('sound') == 'true') {
			document.getElementById('endCard').play();
		}
		if (localStorage.getItem('Highscore') < score){
			localStorage.setItem('Highscore', score);
		}
		if (kXP >= localStorage.getItem('kXPstrg')) {
			localStorage.setItem('kXPstrg', kXP);
			console.log(kXP)
		}
		$('.flexmain, #score-text').hide();
		$('#EndCard').removeClass('hidden');
		var matches = localStorage.getItem('ArcadeMatches');
		localStorage.setItem('ArcadeMatches', ++matches);
		if (localStorage.getItem('AverageHighscore') == null){
			localStorage.setItem('AverageHighscore', score);
		}
			else {
				localStorage.setItem('AverageHighscore', (localStorage.getItem('AverageHighscore') * (localStorage.getItem('ArcadeMatches')-1) + score)/localStorage.getItem('ArcadeMatches'));
			}
			$('#EndScore').html('Your score: ' + score + '<br>Highscore: ' + localStorage.getItem('Highscore') + '<br>Average Score: ' + Math.round(localStorage.getItem('AverageHighscore')) + '<br>Matches played: ' + localStorage.getItem('ArcadeMatches'));
	}
	$('.xpmessage').removeClass('hidden');
	setTimeout(function(){ $('.xpmessage').addClass('hidden');}, 1000);
	$('.replydiv').hide();
	$('#ButtonOne, #ButtonTwo, #ButtonThree').removeClass('disabled');
	$('#ButtonFour').addClass('disabled');
	count++;
	text();
	if (localStorage.getItem('sound') == 'true') {
		document.getElementById('btnsfx').play();
	}
}