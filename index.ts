// Import stylesheets
import './style.css';
import * as later from 'later';

// Write TypeScript code!
const play = function(name) {
  let audio = new Audio('https://raw.githubusercontent.com/tine2k/portal-combat-sound-board/master/' + name + '.mp3');
  audio.addEventListener('play', () => document.getElementById(name).disabled = true);
  audio.addEventListener('ended', () => document.getElementById(name).disabled = false);
  audio.play();
}

document.getElementById('standup').onclick = () => play('standup');
document.getElementById('review').onclick = () => play('review');
document.getElementById('estimation').onclick = () => play('estimation');
document.getElementById('kaffee').onclick = () => play('kaffee');
document.getElementById('grooming').onclick = () => play('grooming');

console.log('scheduling job...');
var textSched = this.later.parse.text('every 10 seconds');
var timer2 = later.setInterval(() => play('standup'), textSched);