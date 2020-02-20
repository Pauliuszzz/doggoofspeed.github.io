randomNumber = Math.floor(Math.random()*10+1);

window.onload = function() {
	document.getElementById("One").style.display = "none";
	document.getElementById("Two").style.display = "none";
	document.getElementById("Three").style.display = "none";
	document.getElementById("Four").style.display = "none";
	document.getElementById("Five").style.display = "none";
	document.getElementById("Six").style.display = "none";
	document.getElementById("Seven").style.display = "none";
	document.getElementById("Eight").style.display = "none";
	document.getElementById("Nine").style.display = "none";
	document.getElementById("Ten").style.display = "none";
	
	if (randomNumber == 1) {
	document.getElementById("One").style.display = "block";
	}
	if (randomNumber == 2) {
	document.getElementById("Two").style.display = "block";
	}
	if (randomNumber == 3) {
	document.getElementById("Three").style.display = "block";
	}
	if (randomNumber == 4) {
	document.getElementById("Four").style.display = "block";
	}
	if (randomNumber == 5) {
	document.getElementById("Five").style.display = "block";
	}
	if (randomNumber == 6) {
	document.getElementById("Six").style.display = "block";
	}
	if (randomNumber == 7) {
	document.getElementById("Seven").style.display = "block";
	}
	if (randomNumber == 8) {
	document.getElementById("Eight").style.display = "block";
	}
	if (randomNumber == 9) {
	document.getElementById("Nine").style.display = "block";
	}
	if (randomNumber == 10) {
	document.getElementById("Ten").style.display = "block";
	}
}