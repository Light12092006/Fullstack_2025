let = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

//primeiro quadrado
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.fillRect(0,0,50,50);
ctx.closePath();

//segndo quadrado
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.fillRect(1850,0,50,50);
ctx.closePath();

//terceiro quadrado
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.fillRect(0,750,50,50);
ctx.closePath();

//quarto quadrado
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.fillRect(1850,750,50,50);
ctx.closePath();

//linha vermelha
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'red';
ctx.moveTo(0,30);
ctx.lineTo(1900,800);
ctx.stroke();
ctx.closePath();

//linha azul
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'blue';
ctx.moveTo(1870,40);
ctx.lineTo(0,800);
ctx.stroke();
ctx.closePath();

//linha verde
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.moveTo(0,400);
ctx.lineTo(1900,400);
ctx.stroke();
ctx.closePath();

// arco
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(950,400,50,0*Math.PI,1*Math.PI);
ctx.stroke();
ctx.closePath();

// circulo 1
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(200,200,50,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// circulo 2
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(1700,200,50,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();