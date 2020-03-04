window.onload = function onload() {
	document.getElementById("ButtonFour").disabled = true;
	document.getElementById("ButtonFive").style.display = "none"
	document.getElementById("reply-text").style.display = "none";
	if(window.innerWidth < 600){
	document.getElementById("ButtonOne").classList.add('btn-sm')
	document.getElementById("ButtonTwo").classList.add('btn-sm')
	document.getElementById("ButtonThree").classList.add('btn-sm')
	document.getElementById("ButtonFour").classList.add('btn-sm')
	document.getElementById("ButtonFive").classList.add('btn-sm')
	}
}