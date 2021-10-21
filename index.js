var allHour = "";
var allMinute = "";
var alarmTime = "";

function Timeclock() {
  var date = new Date();
  var hours = date.getHours() + "";
  var minutes = date.getMinutes() + "";
  var seconds = date.getSeconds() + "";
  var day = date.getDay();
  if (hours.length < 2) {
    hours = "0" + hours;
  }
  if (minutes.length < 2) {
    minutes = "0" + minutes;
  }
  if (seconds.length < 2) {
    seconds = "0" + seconds;
  }
  var weekDay = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
  var clock = weekDay[day] + " " + hours + ":" + minutes + ":" + seconds;
  document.getElementById("clock").innerHTML = clock;
  if (minutes == allMinute && hours == allHour && date.getSeconds() < 200) {
    playBeep();
  }
}

//for alarm set
function setAlarmTime() {
  var timeString = String(document.getElementById("alarmTimeSelect").value);
  allHour = timeString.charAt(0) + timeString.charAt(1);
  allMinute = timeString.charAt(3) + timeString.charAt(4);
  document.getElementById("alarm").innerHTML =
    "Alarm: " + allHour + ":" + allMinute;
}

//funtionality for snoozing for every 5 minute 
function snooze() {
  if (allMinute != "" || allHour != "") {
    var snoozeMinute = 5;
    if (Number(allMinute) < 50) {
      snoozeMinute += Number(allMinute);
      allMinute = String(snoozeMinute);
      allHour = allHour;
    } else if (Number(allMinute) >= 50) {
      snoozeMinute = Number(allMinute) + snoozeMinute - 60;
      if (snoozeMinute === 0) {
        allMinute = "00";
      } else {
        allMinute = "0" + String(snoozeMinute);
      }
      allHour = Number(allHour) + 1;
      String(allHour);
    }
    document.getElementById("alarm").innerHTML =
      "Alarm: " + allHour + ":" + allMinute;
  }
}

// delete alarm
function deleteAlarm(){

}

// playing music while alarm
function playBeep() {
  var audio = new Audio("./music.mp3");
  audio.play();
}
Timeclock();

//time interval for 1 sec
setInterval(Timeclock, 1000);
