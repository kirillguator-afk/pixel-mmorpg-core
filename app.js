// Simulated PearJS/Hyperswarm Integration
const peers = new Map();
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let player = { x: 100, y: 100, size: 20, color: 'lime' };
window.addEventListener('keydown', e => {
  if(e.key==='w') player.y -= 10;
  if(e.key==='s') player.y += 10;
  if(e.key==='a') player.x -= 10;
  if(e.key==='d') player.x += 10;
});

function loop() {
  ctx.fillStyle = '#111';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.size, player.size);
  requestAnimationFrame(loop);
}
loop();
// P2P mock logic added
setInterval(() => {
  peers.set('peer_'+Math.floor(Math.random()*100), {x: Math.random()*500, y: Math.random()*500});
}, 5000);

// Combat System
window.addEventListener('keydown', e => {
  if(e.key===' ') {
    console.log('Player Attacked!');
    // Collision detection logic to be added
  }
});