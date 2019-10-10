// Import stylesheets
import './style.css';

// Write TypeScript code!
function play(name) {
  let audio = new Audio('https://raw.githubusercontent.com/tine2k/portal-combat-sound-board/master/' + name + '.mp3');
  audio.addEventListener('play', () => document.getElementById(name).disabled = true);
  audio.addEventListener('ended', () => document.getElementById(name).disabled = false);
  audio.play();
}

function cronjob() {
  console.log('scheduling job...');
  var textSched = later.parse.text('every 10 seconds');
  var timer2 = later.setInterval(() => play('standup'), textSched);
};