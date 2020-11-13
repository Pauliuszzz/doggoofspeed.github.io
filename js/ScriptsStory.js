var M5 = false;

window.onload = function onload() {
  if (localStorage.getItem('sound') == 'true') {
    $('body').append('<audio id="btnsfx1" src="../resources/btnsfx1.ogg"></audio>', '<audio id="btnsfx2" src="../resources/btnsfx2.ogg"></audio>', '<audio id="btnsfx3" src="../resources/btnsfx3.ogg"></audio>', '<audio id="btnsfx4" src="../resources/btnsfx4.ogg"></audio>', '<audio id="endCard" src="../resources/endCard.ogg"></audio>')
  }
	$('#ButtonFour').addClass('disabled');
	$('.replydiv').hide();
	text();
}

function text() {
	$('#scenario-text').html(scenarios[count].scenario);
	$('#ButtonOne').html(scenarios[count].answer1);
	$('#ButtonTwo').html(scenarios[count].answer2);
	$('#ButtonThree').html(scenarios[count].answer3);
	switch (undefined) {
		case scenarios[count].answer1:
			$('#ButtonOne').hide();
			break;
		case scenarios[count].answer2:
			$('#ButtonTwo').hide();
			break;
		case scenarios[count].answer3:
			$('#ButtonThree').hide();
			break;
	}
	if (scenarios[count].answer1 == null && scenarios[count].answer2 == null && scenarios[count].answer3 == null){
		$('#ButtonFour').removeClass('disabled');
		$('.replydiv').hide();
		$('.buttondiv').hide();
	}
		else {
			$('#ButtonFour').addClass('disabled');
		}
}

//Replies
function reply1() {
	if (scenarios[count].reply1 != null){
		$('#reply-text').html(scenarios[count].reply1);
		$('.replydiv').show();
	}
	$('#ButtonFour').removeClass('disabled');
	$('#ButtonTwo, #ButtonThree').addClass('disabled');
	if (scenarios[count].skipto1 != null){
		count = (scenarios[count].skipto1 - 2);
	}
	if (localStorage.getItem('sound') == 'true') {
		document.getElementById('btnsfx1').play();
	}
}
function reply2() {
	if (scenarios[count].reply2 != null){
		$('#reply-text').html(scenarios[count].reply2);
		$('.replydiv').show();
	}
	$('#ButtonFour').removeClass('disabled');
	$('#ButtonOne, #ButtonThree').addClass('disabled');
	if (scenarios[count].skipto2 != null){
		count = (scenarios[count].skipto2 - 2);
	}
	if (localStorage.getItem('sound') == 'true') {
		document.getElementById('btnsfx2').play();
	}
}
function reply3() {
	if (scenarios[count].reply3 != null){
	  $('#reply-text').html(scenarios[count].reply3);
	  $('.replydiv').show();
	}
	$('#ButtonFour').removeClass('disabled');
	$('#ButtonOne, #ButtonTwo').addClass('disabled');
	if (scenarios[count].skipto3 != null){
	  count = (scenarios[count].skipto3 - 2);
	}
	if (localStorage.getItem('sound') == 'true') {
		document.getElementById('btnsfx3').play();
	}
}

  //Ending Counter
  function endingcounter() {
	switch (Object.keys(scenarios[count]).pop()) {
		case 'ending1':
			if (endings[0] == '0'){
				endings[0] = '1';
			}
			break;
		case 'ending2':
			if (endings[1] == '0'){
				endings[1] = '1';
			}
			break;
		case 'ending3':
			if (endings[2] == '0'){
				endings[2] = '1';
			}
			break;
		case 'ending4':
			if (endings[3] == '0'){
				endings[3] = '1';
			}
			break;
		case 'ending5':
			if (endings[4] == '0'){
				endings[4] = '1';
			}
			break;
		case 'ending6':
			if (endings[5] == '0'){
				endings[5] = '1';
			}
			break;
		case 'ending7':
			if (endings[6] == '0'){
				endings[6] = '1';
			}
			break;
		case 'ending7':
			if (endings[6] == '0'){
				endings[6] = '1';
			}
			break;
		case 'ending8':
			if (endings[7] == '0'){
				endings[7] = '1';
			}
			break;
		case 'ending9':
			if (endings[8] == '0'){
				endings[8] = '1';
			}
			break;
		case 'ending10':
			if (endings[9] == '0'){
				endings[9] = '1';
			}
			break;
	}
	$('div#EndCard').removeClass('hidden');
	save();
}

//Next scenario
function nextScenario(mult){
	$('#ButtonOne, #ButtonTwo, #ButtonThree').removeClass('disabled').show();
	if (quit == true){
		endingcounter();
		if (M5 == true) {
			endingcounter5();
		}
		$('.flexmain').hide();
		if (localStorage.getItem('sound') == 'true') {
			document.getElementById('endCard').play();
		}
	}
	if (scenarios.length > count + 1) {
		count++;
	}
	$('.replydiv').hide();
	$('.buttondiv').show();
	quit = scenarios[count].quit;
	text();
	if (localStorage.getItem('sound') == 'true') {
		document.getElementById('btnsfx4').play();
	}
}