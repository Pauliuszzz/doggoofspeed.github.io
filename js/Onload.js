window.onload = function onload() {
	document.getElementById("ButtonFour").disabled = true;
	document.getElementById("ButtonFive").style.display = "none"
	document.getElementById("reply-text").style.display = "none";
	if(window.innerWidth < 600){
	document.getElementById("ButtonOne").classList.add("mobile", "btn-sm")
	document.getElementById("ButtonTwo").classList.add("mobile", "btn-sm")
	document.getElementById("ButtonTwo").classList.add("mobile", "btn-sm")
	document.getElementById("ButtonThree").classList.add("mobile", "btn-sm")
	document.getElementById("ButtonFour").classList.add("mobile", "btn-sm")
	document.getElementById("ButtonFive").classList.add("mobile", "btn-sm")
	}
	if(window.innerWidth > 600){
	document.getElementById("ButtonOne").classList.add('desktop')
	document.getElementById("ButtonTwo").classList.add('desktop')
	document.getElementById("ButtonTwo").classList.add('desktop')
	document.getElementById("ButtonThree").classList.add('desktop')
	document.getElementById("ButtonFour").classList.add('desktop')
	document.getElementById("ButtonFive").classList.add('desktop')
	}
}