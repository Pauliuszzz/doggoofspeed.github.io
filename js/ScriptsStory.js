window.onload = function onload() {
	$('#ButtonFour').prop('disabled', true);
	$('.replydiv').hide();
	text();
};

function text() {
	$('#scenario-text').html(scenarios[count].scenario);
	$('#ButtonOne').html(scenarios[count].answer1);
	$('#ButtonTwo').html(scenarios[count].answer2);
	$('#ButtonThree').html(scenarios[count].answer3);
	if (scenarios[count].answer1 === null) {
		$('#ButtonOne').hide();
	}
	if (scenarios[count].answer2 === null) {
		$('#ButtonTwo').hide();
	}
	if (scenarios[count].answer3 === null) {
		$('#ButtonThree').hide();
	}
	if(scenarios[count].answer1 === null && scenarios[count].answer2 === null && scenarios[count].answer3 === null){
		$('#ButtonFour').prop('disabled', false);
		$('.replydiv').hide();
		$('.buttondiv').hide();
	}
		else{
			$('#ButtonFour').prop('disabled', true);
		}
}

//Replies
	function reply1() {
		if(scenarios[count].reply1 !== null){
			$('#reply-text').html(scenarios[count].reply1);
			$('.replydiv').show();
		}
		$('#ButtonFour').prop('disabled', false);
		$('#ButtonTwo, #ButtonThree').prop('disabled', true);
			if (scenarios[count].skipto1 !== null){
				count = scenarios[count].skipto1;
			}
	}
	function reply2() {
		if(scenarios[count].reply2 !== null){
			$('#reply-text').html(scenarios[count].reply2);
			$('.replydiv').show();
		}
		$('#ButtonFour').prop('disabled', false);
		$('#ButtonOne, #ButtonThree').prop('disabled', true);
			if (scenarios[count].skipto2 !== null){
				count = scenarios[count].skipto2;
			}
	}
	function reply3() {
		if(scenarios[count].reply3 !== null){
			$('#reply-text').html(scenarios[count].reply3);
			$('.replydiv').show();
		}
		$('#ButtonFour').prop('disabled', false);
		$('#ButtonOne, #ButtonTwo').prop('disabled', true);
			if (scenarios[count].skipto3 !== null){
				count = scenarios[count].skipto3;
			}
	}

//Next scenario
	function next_scenario(mult){
		$('#ButtonOne, #ButtonTwo, #ButtonThree').prop('disabled', false).show();
		if(quit === true){
			endingcounter();
			$('.flexmain').hide();
		}
		if (scenarios.length > count + 1) {
			count++;
		}
		$('.replydiv').hide();
		$('.buttondiv').show();
		quit = scenarios[count].quit;
		text();
	}