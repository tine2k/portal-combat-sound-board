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
//new CronJob('30 9 * * *', () => play('standup'), null, true, 'Europe/Vienna');