var count = 0;
var score = 0;

window.onload = function onload() {
	$('#ButtonFour').prop('disabled', true);
	$('.replydiv').hide();
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
	if (scenarios[count].answer1 === null) {
		$('#ButtonOne').hide();
	}
	if (scenarios[count].answer2 === null) {
		$('#ButtonTwo').hide();
	}
	if (scenarios[count].answer3 === null) {
		$('#ButtonThree').hide();
	}
}

//Replies
function reply1() {
	$('#reply-text').html(scenarios[count].reply1);
	$('.replydiv').show();
	$('#ButtonFour').prop('disabled', false);
	$('#ButtonTwo, #ButtonThree').prop('disabled', true);
	score = score + scenarios[count].score1;
	if ($('.xpmessage').hasClass('hidden') === true) {
		$('.xptext').html('+' + scenarios[count].score1 + 'Xp');
	}
}
function reply2() {
	$('#reply-text').html(scenarios[count].reply2);
	$('.replydiv').show();
	$('#ButtonFour').prop('disabled', false);
	$('#ButtonOne, #ButtonThree').prop('disabled', true);
	score = score + scenarios[count].score2;
	if ($('.xpmessage').hasClass('hidden') === true) {
		$('.xptext').html('+' + scenarios[count].score2 + 'Xp');
	}
}
function reply3() {
	$('#reply-text').html(scenarios[count].reply3);
	$('.replydiv').show();
	$('#ButtonFour').prop('disabled', false);
	$('#ButtonOne, #ButtonTwo').prop('disabled', true);
	score = score + scenarios[count].score3;
	if ($('.xpmessage').hasClass('hidden') === true) {
		$('.xptext').html('+' + scenarios[count].score3 + 'Xp');
	}
}
	
//Next scenario
function next_scenario() {
	if(count >= 10){
		if(localStorage.getItem('Highscore') < score){
			localStorage.setItem('Highscore', score);
		}
		$('.flexmain, #score-text').hide();
		$('#EndCard').removeClass('hidden');
		var matches = localStorage.getItem('ArcadeMatches');
		localStorage.setItem('ArcadeMatches', ++matches);
		if (localStorage.getItem('AverageHighscore') === null){
			localStorage.setItem('AverageHighscore', score);
		}
			else {
				localStorage.setItem('AverageHighscore', (localStorage.getItem('AverageHighscore') * (localStorage.getItem('ArcadeMatches')-1) + score)/localStorage.getItem('ArcadeMatches'));
			}
			$('#EndScore').html('Your score: ' + score + '<br>Highscore: ' + localStorage.getItem('Highscore') + '<br>Average Score: ' + Math.round(localStorage.getItem('AverageHighscore')) + '<br>Matches played: ' + localStorage.getItem('ArcadeMatches'));
	}
	$('.xpmessage').removeClass('hidden');
	setTimeout(function(){ $('.xpmessage').addClass('hidden');}, 2000);
	$('.replydiv').hide();
	$('#ButtonOne, #ButtonTwo, #ButtonThree').prop('disabled', false);
	$('#ButtonFour').prop('disabled', true);
	count++;
	text();
}