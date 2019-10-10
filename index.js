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

later.date.localTime();
var cronDef = 'at 11:43pm every weekday';
console.log('scheduling job@' + cronDef);
var scheduler = later.parse.text(cronDef);
later.setInterval(() => play('standup'), scheduler);