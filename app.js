function clock() {
  var realTime = new Date();
  //realTime.toLocaleString("en-GB",{timeZone:'GMT+530'})
  let hours = realTime.getHours();
  if (hours > 12) hours = hours - 12;
  let minutes = realTime.getMinutes();
  let seconds = realTime.getSeconds();
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = ":" + minutes;
  document.getElementById("seconds").innerHTML = ":" + seconds;
}
setInterval(clock, 100);
