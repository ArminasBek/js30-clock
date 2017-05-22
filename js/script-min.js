var secondHand = document.querySelector('.second-hand');
var minuteHand = document.querySelector('.min-hand');
var hourHand   = document.querySelector('.hour-hand');


function setDate() {
	var now = new Date()
	var seconds = now.getSeconds();
	var minutes = now.getMinutes();
	var hour    = now.getHours();
	var secondsDegree = ((seconds / 60) * 360) + 90;
	var minutesDegree = ((minutes / 60) * 360) + 90;
	var hoursDegree    = ((hour / 12) * 360) + 90;
	secondHand.style.transform = `rotate(${secondsDegree}deg)`;
	minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
	hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000);



