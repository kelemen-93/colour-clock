function colourClock() {
  
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  

  if (hours < 10) {
    hours = '0' + hours;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  var clockFace = hours + ':' + minutes + ':' + seconds;
  var hexColour = '#' + hours + minutes + seconds;

  document.getElementById('clock').innerHTML = clockFace;
  document.body.style.background = hexColour;
  
  setTimeout(function() {
    colourClock();
  }, 1000);
}

colourClock();