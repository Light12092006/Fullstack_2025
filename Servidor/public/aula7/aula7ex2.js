let = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// sol
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'yellow';
ctx.arc(300,100,50,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//casa 1
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'brown';
ctx.fillRect(150,200,90,100);
ctx.closePath();

//janela 1
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#1E90FF';
ctx.fillRect(160,220,25,25);
ctx.closePath();

//janela 2
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#1E90FF';
ctx.fillRect(205,220,25,25);
ctx.closePath();

//porta
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#8B4513';
ctx.fillRect(185,250,25,50);
ctx.closePath();

//telhado
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#FF8C00';
ctx.moveTo(200,150);
ctx.lineTo(60,10);
ctx.lineTo(60,250);
ctx.lineTo(200,250);
ctx.lineTo(200,150);
ctx.fill();
ctx.stroke();
ctx.closePath();
