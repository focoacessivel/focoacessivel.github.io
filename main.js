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
})



function updateTextContent(idPattern, text, count) {
  for (var i = 1; i <= count; i++) {
      var element = document.getElementById(idPattern + i);
      if (element) {
          element.textContent = text;
      }
  }
}

function updateTextContentByClass(className, text) {
  var elements = document.getElementsByClassName(className);
  for (var i = 0; i < elements.length; i++) {
      elements[i].textContent = text;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  updateTextContentByClass('episodiosItem', 'Episódio');
});