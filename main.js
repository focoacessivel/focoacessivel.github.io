//Player
// const player = new Plyr("#player");

//Indice do Player
function seekToTime(time) {
  var audio = document.getElementById('audioplayer');
  audio.currentTime = time;
  audio.play();
}

window.player = player;

// Analitycs
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-JSVR5N10GY");

