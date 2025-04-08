function desenharQuadrado(x, y, width, height, cor) {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, width, height);
    ctx.closePath();
}

function desenharLinha(x1, y1, x2, y2, cor) {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = cor;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}

function desenharArco(x, y, raio, anguloInicial, anguloFinal, cor, preencher=false) {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = cor;
    ctx.arc(x, y, raio, anguloInicial, anguloFinal);
    
    if (preencher) {
        ctx.fillStyle = cor;
        ctx.fill();
    }
    
    ctx.stroke();
    ctx.closePath();
}

function desenharCirculo(x, y, raio, corPreenchimento, corContorno) {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = corPreenchimento;
    ctx.strokeStyle = corContorno;
    ctx.arc(x, y, raio, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function desenharQuadrados() {
    desenharQuadrado(0, 0, 50, 50, 'blue');
    desenharQuadrado(250, 0, 50, 50, 'red');
    desenharQuadrado(270, 135, 30, 30, '#00FFFF');
    desenharQuadrado(0, 120, 30, 60, '#00FFFF');
    desenharQuadrado(110, 150, 40, 40, 'red');
    desenharQuadrado(0, 240, 30, 60, 'yellow');
    desenharQuadrado(30, 270, 30, 30, 'yellow');
    desenharQuadrado(270, 240, 30, 60, 'black');
    desenharQuadrado(240, 270, 30, 30, 'black');
}
desenharQuadrados();

function desenharLinhas() {
    desenharLinha(50, 50, 150, 150, 'blue');
    desenharLinha(250, 50, 150, 150, 'red');
    desenharLinha(0, 150, 300, 150, 'green');
    desenharLinha(150, 150, 150, 300, 'grey');
}
desenharLinhas();

function desenharArcos() {
    desenharArco(150, 150, 50, 1 * Math.PI, 2 * Math.PI, 'green');
    desenharArco(120, 150, 50, 1 * Math.PI, 1.38 * Math.PI, 'green');
    desenharArco(180, 150, 50, 1.62 * Math.PI, 2 * Math.PI, 'green');
    desenharArco(150, 300, 40, 1 * Math.PI, 2 * Math.PI, 'green', true);
    desenharArco(160, 300, 50, 1.44 * Math.PI, 2 * Math.PI, 'green');
    desenharArco(140, 300, 60, 1 * Math.PI, 1.55 * Math.PI, 'green');
}
desenharArcos();

function desenharCirculos() {
    desenharCirculo(150, 120, 10, '#00FFFF', 'blue');
    desenharCirculo(70, 245, 10, 'yellow', 'green');
    desenharCirculo(230, 245, 10, 'yellow', 'green');
}
desenharCirculos();


let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas2.getContext('2d');

function retangulo(l,cr,x4,y4,w4,h4){
    ctx2.beginPath()
    ctx2.lineWidth = l
    ctx2.fillStyle = cr
    ctx2.fillRect (x4,y4,w4,h4)
    ctx2.closePath()
}
retangulo(1,'brown',120,150,60,100)
retangulo(1,'brown',50,170,20,60)
retangulo(1,'grey',0,220,300,150)
retangulo(1,'brown',250,210,20,60)
retangulo(1,'rgb(117, 19, 19)',145,190,10,30)
retangulo(1,'dodgerblue',0,270,90,50)
retangulo(1,'dodgerblue',0,240,30,30)
retangulo(1,'cyan',125,165,20,20)
retangulo(1,'cyan',155,165,20,20)

function circulo(l2,cr2,x5,y5,h5,pi3,pi4){
    ctx2.beginPath()
    ctx2.lineWidth = l2
    ctx2.fillStyle = cr2
    ctx2.arc(x5,y5,h5,pi3*Math.PI,pi4*Math.PI)
    ctx2.fill()
    ctx2.closePath()
}
circulo(1,'yellow',225,75,40,0,2)
circulo(1,'green',260,205,25,0,2)
circulo(1,'green',60,170,25,0,2)
circulo(1,'dodgerblue',6,240,25,1,0)
circulo(1,'dodgerblue',90,297,25,1.5,2.5)

ctx2.beginPath()
ctx2.lineWidth = 1
ctx2.fillStyle = 'rgb(228, 56, 85)'
ctx2.moveTo(120,150) //vertice 1(cima)
ctx2.lineTo(150,130) //vertice 2(baixo esquerda)
ctx2.lineTo(180,150)//vertice 3(baixo direita)
ctx2.fill()
ctx2.closePath()