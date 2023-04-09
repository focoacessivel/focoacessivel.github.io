//Player
const player = new Plyr("#player");

window.player = player;

// Analitycs
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-JSVR5N10GY");