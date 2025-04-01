// Função para desenhar um quadrado
function desenharQuadrado(x, y, width, height, cor) {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, width, height);
    ctx.closePath();
}

// Função para desenhar uma linha
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

// Função para desenhar um arco
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

// Função para desenhar um círculo
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

// Função para desenhar os quadrados
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

// Função para desenhar as linhas
function desenharLinhas() {
    desenharLinha(50, 50, 150, 150, 'blue');
    desenharLinha(250, 50, 150, 150, 'red');
    desenharLinha(0, 150, 300, 150, 'green');
    desenharLinha(150, 150, 150, 300, 'grey');
}
desenharLinhas();

// Função para desenhar os arcos
function desenharArcos() {
    desenharArco(150, 150, 50, 1 * Math.PI, 2 * Math.PI, 'green');
    desenharArco(120, 150, 50, 1 * Math.PI, 1.38 * Math.PI, 'green');
    desenharArco(180, 150, 50, 1.62 * Math.PI, 2 * Math.PI, 'green');
    desenharArco(150, 300, 40, 1 * Math.PI, 2 * Math.PI, 'green', true);
    desenharArco(160, 300, 50, 1.44 * Math.PI, 2 * Math.PI, 'green');
    desenharArco(140, 300, 60, 1 * Math.PI, 1.55 * Math.PI, 'green');
}
desenharArcos();

// Função para desenhar os círculos
function desenharCirculos() {
    desenharCirculo(150, 120, 10, '#00FFFF', 'blue');
    desenharCirculo(70, 245, 10, 'yellow', 'green');
    desenharCirculo(230, 245, 10, 'yellow', 'green');
}
desenharCirculos();
