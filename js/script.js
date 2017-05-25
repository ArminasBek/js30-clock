var secondHand = document.querySelector('.second-hand');
var minuteHand = document.querySelector('.min-hand');
var hourHand   = document.querySelector('.hour-hand');

/*logic
   - setInterval fires setDate function every second
   - I need to change hoursDegree variable when button is clicked
  Problems:
	 - button approach passing arguments to set date doesn't work, because if someone 
	   opens it in different time zone, time will be unsynced.

*/
function setDate(gmt) {
	var now = new Date()
	var seconds = now.getSeconds();
	var minutes = now.getMinutes();
	var hour    = now.getHours();
	var utcHours = now.getUTCHours();
	console.log(utcHours)

	var secondsDegree = ((seconds / 60) * 360) + 90;
	var minutesDegree = ((minutes / 60) * 360) + 90;
	var hoursDegree   = (((hour - gmt) / 12) * 360) + 90;
	
	secondHand.style.transform = `rotate(${secondsDegree}deg)`;
	minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
	hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}




setInterval(setDate, 1000);

// function showTimeNewYork() {
// 	setInterval(setDate, 1000, 5);
// }
// function showTimeMoscow() {
// 	setInterval(setDate, 1000, 25);
// }


