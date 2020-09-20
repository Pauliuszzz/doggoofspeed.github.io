window.onload = function onload() {
	$('#ButtonFour').addClass('disabled');
	$('.replydiv').hide();
	text();
	if (localStorage.getItem('blur') != 'true') {
        $('nav').css({'backdrop-filter': 'none'});
    }
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
	if(scenarios[count].answer1 == null && scenarios[count].answer2 == null && scenarios[count].answer3 == null){
		$('#ButtonFour').removeClass('disabled');
		$('.replydiv').hide();
		$('.buttondiv').hide();
	}
		else{
			$('#ButtonFour').addClass('disabled');
		}
}

//Replies
	function reply1() {
		if(scenarios[count].reply1 != null){
			$('#reply-text').html(scenarios[count].reply1);
			$('.replydiv').show();
		}
		$('#ButtonFour').removeClass('disabled');
		$('#ButtonTwo, #ButtonThree').addClass('disabled');
			if (scenarios[count].skipto1 != null){
				count = scenarios[count].skipto1;
			}
				if (localStorage.getItem('sound') == 'true') {
					document.getElementById('btnsfx1').play();
				}
	}
	function reply2() {
		if(scenarios[count].reply2 != null){
			$('#reply-text').html(scenarios[count].reply2);
			$('.replydiv').show();
		}
		$('#ButtonFour').removeClass('disabled');
		$('#ButtonOne, #ButtonThree').addClass('disabled');
			if (scenarios[count].skipto2 != null){
				count = scenarios[count].skipto2;
			}
				if (localStorage.getItem('sound') == 'true') {
					document.getElementById('btnsfx2').play();
				}
	}
	function reply3() {
		if(scenarios[count].reply3 != null){
			$('#reply-text').html(scenarios[count].reply3);
			$('.replydiv').show();
		}
		$('#ButtonFour').removeClass('disabled');
		$('#ButtonOne, #ButtonTwo').addClass('disabled');
			if (scenarios[count].skipto3 != null){
				count = scenarios[count].skipto3;
			}
				if (localStorage.getItem('sound') == 'true') {
					document.getElementById('btnsfx3').play();
				}
	}

//Next scenario
	function nextScenario(mult){
		$('#ButtonOne, #ButtonTwo, #ButtonThree').removeClass('disabled').show();
		if(quit == true){
			endingcounter();
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