var count = 0;
var hpbfr;
var hp = 100;

window.onload = function onload() {
	$('#ButtonFour').prop('disabled', true);
	$('.replydiv').hide();
	shuffle(scenarios);
	text();
	if (localStorage.getItem('blur') != 'true') {
        $('nav').css({'backdrop-filter': 'none'});
    }
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
	$('#ButtonFour').prop('disabled', false);
	$('#ButtonTwo, #ButtonThree').prop('disabled', true);
	hpbfr = hp;
	hp = hp - scenarios[count].damage1;
	if ($('.hpmessage').hasClass('hidden') == true) {
		$('.hptext').html('-' + scenarios[count].damage1 + 'Hp');
	}
	if (localStorage.getItem('sound') == 'true') {
		document.getElementById('btnsfx1').play();
	}
}
function reply2() {
	$('#reply-text').html(scenarios[count].reply2);
	$('.replydiv').show();
	$('#ButtonFour').prop('disabled', false);
	$('#ButtonOne, #ButtonThree').prop('disabled', true);
	hpbfr = hp;
	hp = hp - scenarios[count].damage2;
	if ($('.hpmessage').hasClass('hidden') == true) {
		$('.hptext').html('-' + scenarios[count].damage2 + 'Hp');
	}
	if (localStorage.getItem('sound') == 'true') {
		document.getElementById('btnsfx2').play();
	}
}
function reply3() {
	$('#reply-text').html(scenarios[count].reply3);
	$('.replydiv').show();
	$('#ButtonFour').prop('disabled', false);
	$('#ButtonOne, #ButtonTwo').prop('disabled', true);
	hpbfr = hp;
	hp = hp - scenarios[count].damage3;
	if ($('.hpmessage').hasClass('hidden') == true) {
		$('.hptext').html('-' + scenarios[count].damage3 + 'Hp');
	}
	if (localStorage.getItem('sound') == 'true') {
		document.getElementById('btnsfx3').play();
	}
}
	
//Next scenario
function next_scenario(mult) {
	if(hp <= 0 || count == 20){
		if(localStorage.getItem('MaxSurvived') < count && hardcore == false){
			localStorage.setItem('MaxSurvived', count);
		}
		if(localStorage.getItem('MaxSurvivedHard') < count && hardcore == true){
			localStorage.setItem('MaxSurvivedHard', count);
		}
		if(count == 20){
			$('#EndCard').removeClass('hidden');
		}
		if(hp <= 0){
			$('#DeadCard').removeClass('hidden');
		}
		$('.flexmain').hide();
		var matches = localStorage.getItem('SurvivalMatches');
		localStorage.setItem('SurvivalMatches', ++matches);
		if (localStorage.getItem('AverageCount') == null){
			localStorage.setItem('AverageCount', count);
		}
			else {
				localStorage.setItem('AverageCount', (localStorage.getItem('AverageCount') * (localStorage.getItem('SurvivalMatches')-1) + count)/localStorage.getItem('SurvivalMatches'));
			}
		$('#EndText').html('You finally reached your destination - a shop. You bought some eggs and some bread. Time to go home...');
		if (localStorage.getItem('MaxSurvived') == null ) {
			$('#DeadText').html('Scenarios survived: ' + count + '<br>Max scenarios survived: 0');
		}
			else {
				$('#DeadText').html('Scenarios survived: ' + count + '<br>Max scenarios survived: ' + localStorage.getItem('MaxSurvived')  + '<br>Average scenarios survived: ' + Math.round(localStorage.getItem('AverageCount')) + '<br>Matches played: ' + localStorage.getItem('SurvivalMatches'));
			}
	}
	if (hp <= 90 && hp == hpbfr && hardcore == false) {
		hp = hp + 10;
		$('.hptext').html('+10Hp');
	}
	$('.hpmessage').removeClass('hidden');
	setTimeout(function(){ $('.hpmessage').addClass('hidden');}, 2000);
	count++;
	$('#progressslider').css('width', hp + '%');
	$('.replydiv').hide();
	$('#ButtonOne, #ButtonTwo, #ButtonThree').prop('disabled', false);
	$('#ButtonFour').prop('disabled', true);
	text();
	if (localStorage.getItem('sound') == 'true') {
		document.getElementById('btnsfx4').play();
	}
}