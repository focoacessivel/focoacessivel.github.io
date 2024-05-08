//Player
// const player = new Plyr("#player");

//Indice do Player
function seekToTime(time) {
  var audio = document.getElementById("audioplayer");
  audio.currentTime = time;
  audio.play();
}

window.player = player;

// Share button
var a2a_config = a2a_config || {};
a2a_config.onclick = 1;
a2a_config.locale = "pt-BR";
a2a_config.thanks = { postShare: true };

// Popover
const list = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'))
list.map((el) => {
  let opts = {
    animation: false,
  }
  if (el.hasAttribute('data-content-id')) {
    opts.content = document.getElementById(el.getAttribute('data-content-id')).innerHTML;
    opts.html = true;
  }
  new bootstrap.Popover(el, opts);
});


// adiciona _blank e diversos
document.addEventListener("DOMContentLoaded", function() {
  const baseUrl = window.location.origin;
  const links = document.querySelectorAll('a');

  links.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('http') && !href.startsWith(baseUrl)) {
          link.setAttribute('rel', 'external no-referrer noopener');
          link.setAttribute('target', '_blank');
          link.setAttribute('title', 'O link irá abrir em uma nova aba');
      }
  });
});