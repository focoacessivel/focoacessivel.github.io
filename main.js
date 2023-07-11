//Player
// const player = new Plyr("#player");

//Indice do Player
function seekToTime(time) {
  var audio = document.getElementById("audioplayer");
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

// Share button
var a2a_config = a2a_config || {};
a2a_config.onclick = 1;
a2a_config.locale = "pt-BR";
a2a_config.thanks = { postShare: true };



//Mouseflow
window._mfq = window._mfq || [];
(function () {
  var mf = document.createElement("script");
  mf.type = "text/javascript"; mf.defer = true;
  mf.src = "//cdn.mouseflow.com/projects/ddd06565-25a4-4b71-8557-2450f389e00c.js";
  document.getElementsByTagName("head")[0].appendChild(mf);
})();