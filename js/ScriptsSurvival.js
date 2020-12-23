var count = 0;
var hpbfr;
var hp = 100;

//Checks if snow should be added
var d = new Date();
var n = d.getMonth();

if ( n == 11 || n == 0 || n == 1 ) {
  var snow = document.createElement('script')
  snow.setAttribute("type","text/javascript")
  snow.setAttribute("src", "../js/snowstorm-min.js")
  document.getElementsByTagName("body")[0].appendChild(snow)
}


window.onload = function onload() {
  if (localStorage.getItem('sound') == 'true') {
    $('body').append('<audio id="btnsfx1" src="../resources/btnsfx1.ogg"></audio>', '<audio id="btnsfx2" src="../resources/btnsfx2.ogg"></audio>', '<audio id="btnsfx3" src="../resources/btnsfx3.ogg"></audio>', '<audio id="btnsfx4" src="../resources/btnsfx4.ogg"></audio>', '<audio id="deadCard" src="../resources/deadCard.ogg" preload="none"></audio>', '<audio id="endCard" src="../resources/endCard.ogg" preload="none"></audio>')
  }
	$('#ButtonFour').addClass('disabled');
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
	if (!scenarios[count].answer1) {
		$('#ButtonOne').hide();
	}
	if (!scenarios[count].answer2) {
		$('#ButtonTwo').hide();
	}
	if (!scenarios[count].answer3) {
		$('#ButtonThree').hide();
	}
}

//Replies
function reply1() {
	$('#reply-text').html(scenarios[count].reply1);
	$('.replydiv').show();
	$('#ButtonFour').removeClass('disabled');
	$('#ButtonTwo, #ButtonThree').addClass('disabled');
	hpbfr = hp;
	hp = hp - scenarios[count].damage1;
	if ($('.hpmessage').hasClass('hidden') == true) {
		$('.hptext').html('-' + scenarios[count].damage1 + 'Hp');
	}
	if (localStorage.getItem('sound') == 'true') {
		$('#btnsfx1').get(0).play();
	}
}
function reply2() {
	$('#reply-text').html(scenarios[count].reply2);
	$('.replydiv').show();
	$('#ButtonFour').removeClass('disabled');
	$('#ButtonOne, #ButtonThree').addClass('disabled');
	hpbfr = hp;
	hp = hp - scenarios[count].damage2;
	if ($('.hpmessage').hasClass('hidden') == true) {
		$('.hptext').html('-' + scenarios[count].damage2 + 'Hp');
	}
	if (localStorage.getItem('sound') == 'true') {
		$('#btnsfx2').get(0).play();
	}
}
function reply3() {
	$('#reply-text').html(scenarios[count].reply3);
	$('.replydiv').show();
	$('#ButtonFour').removeClass('disabled');
	$('#ButtonOne, #ButtonTwo').addClass('disabled');
	hpbfr = hp;
	hp = hp - scenarios[count].damage3;
	if ($('.hpmessage').hasClass('hidden') == true) {
		$('.hptext').html('-' + scenarios[count].damage3 + 'Hp');
	}
	if (localStorage.getItem('sound') == 'true') {
		$('#btnsfx3').get(0).play();
	}
}
	
//Next scenario
function nextScenario(mult) {
	if (hp <= 0 || count == 20){
		if (localStorage.getItem('MaxSurvived') < count && hardcore == false){
			localStorage.setItem('MaxSurvived', count);
		}
		if (localStorage.getItem('MaxSurvivedHard') < count && hardcore == true){
			localStorage.setItem('MaxSurvivedHard', count);
		}
		if (count == 20){
			$('#EndCard').removeClass('hidden');
			if (localStorage.getItem('sound') == 'true') {
			  $('#endCard').get(0).play();
			}
		}
		if (hp <= 0){
			$('#DeadCard').removeClass('hidden');
			if (localStorage.getItem('sound') == 'true') {
				$('#deadCard').get(0).play();
			}
		}
		$('.flexmain').hide();
		var matches = localStorage.getItem('SurvivalMatches');
		localStorage.setItem('SurvivalMatches', ++matches);
		if (!localStorage.getItem('AverageCount')){
			localStorage.setItem('AverageCount', count);
		}
			else {
				localStorage.setItem('AverageCount', (localStorage.getItem('AverageCount') * (localStorage.getItem('SurvivalMatches')-1) + count)/localStorage.getItem('SurvivalMatches'));
			}
		$('#EndText').html('You finally reached your destination - a shop. You bought some eggs and some bread. Time to go home...');
		if (!localStorage.getItem('MaxSurvived')) {
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
	$('#ButtonOne, #ButtonTwo, #ButtonThree').removeClass('disabled');
	$('#ButtonFour').addClass('disabled');
	text();
	if (localStorage.getItem('sound') == 'true') {
		$('#btnsfx4').get(0).play();
	}
}