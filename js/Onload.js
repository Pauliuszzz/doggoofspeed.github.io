window.onload = function onload() {
	$("#ButtonFour").prop('disabled', true);
	$("#reply-text").hide()
	if(window.innerWidth < 600){
	$("#ButtonOne").addClass("mobile btn-sm")
	$("#ButtonTwo").addClass("mobile btn-sm")
	$("#ButtonTwo").addClass("mobile btn-sm")
	$("#ButtonThree").addClass("mobile btn-sm")
	$("#ButtonFour").addClass("mobile btn-sm")
	}
	if(window.innerWidth > 600){
	$("#ButtonOne").addClass("desktop")
	$("#ButtonTwo").addClass("desktop")
	$("#ButtonTwo").addClass("desktop")
	$("#ButtonThree").addClass("desktop")
	$("#ButtonFour").addClass("desktop")
	}
	var i = scenarios.length, k , temp;
	while(--i > 0){
    k = Math.floor(Math.random() * (i+1));
    temp = scenarios[k];
    scenarios[k] = scenarios[i];
    scenarios[i] = temp;
	}
    text();
}