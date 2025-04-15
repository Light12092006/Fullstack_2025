const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');

let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;

const radius = 20; 

canvas.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;

  
  x = Math.max(radius, Math.min(canvas.width - radius, x));
  y = Math.max(radius, Math.min(canvas.height - radius, y));

  mouseX = x;
  mouseY = y;
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

 
  ctx.beginPath();
  ctx.arc(mouseX, mouseY, radius, 0, Math.PI * 2);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.closePath();

  requestAnimationFrame(draw);
}

draw();
