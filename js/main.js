// Change "{}" to your options:
// https://github.com/sampotts/plyr/#options
const player = new Plyr('audio', {});

// Expose player so it can be used from the console
window.player = player;


function send_data() {
    var form_data = document.getElementsByClassName("form-data"); //retrieve filled form data
    var i;
    var data = [];
    for (i = 0; i < form_data.length; i++) {
        data.push(form_data[i].value);
    }
    google.script.run.saveData(data); // send to google app script
    document.getElementById("form").style.display = "none"; // make form invisible
    document.getElementById("completion-msg").style.display = "block"; // Optional if you want to give a completion feedback!
}